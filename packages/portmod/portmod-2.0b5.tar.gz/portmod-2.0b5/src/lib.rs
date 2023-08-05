#[macro_use]
extern crate serde_with;

mod conflicts;
mod dds;
mod error;
mod metadata;
mod news;
mod yaml;

use crate::conflicts::conflicts;
use crate::dds::get_dds_dimensions;
use crate::metadata::{CategoryMetadata, GroupDeclaration, PackageMetadata};
use crate::news::News;
use crate::yaml::parse_yaml;
use esplugin::{GameId, Plugin};
use std::collections::HashMap;
use std::collections::HashSet;
use std::path::Path;
use walkdir::WalkDir;

use pyo3::prelude::*;
use pyo3::wrap_pyfunction;

#[allow(dead_code)]
fn main() {
    use pyo3::create_exception;
    use pyo3::prelude::*;

    #[pyfunction]
    pub fn parse_package_metadata(filename: String) -> PyResult<PackageMetadata> {
        Ok(parse_yaml(filename)?)
    }

    #[pyfunction]
    pub fn parse_category_metadata(filename: String) -> PyResult<CategoryMetadata> {
        Ok(parse_yaml(filename)?)
    }

    #[pyfunction]
    pub fn parse_yaml_dict(filename: String) -> PyResult<HashMap<String, String>> {
        Ok(parse_yaml(filename)?)
    }

    #[pyfunction]
    pub fn parse_groups(filename: String) -> PyResult<HashMap<String, GroupDeclaration>> {
        Ok(parse_yaml(filename)?)
    }

    #[pyfunction]
    pub fn parse_yaml_dict_dict(
        filename: String,
    ) -> PyResult<HashMap<String, HashMap<String, String>>> {
        Ok(parse_yaml(filename)?)
    }

    #[pyfunction]
    pub fn parse_news(filename: String) -> PyResult<News> {
        Ok(parse_yaml(filename)?)
    }

    #[pyfunction]
    fn file_conflicts(dirs: Vec<String>, ignore: Vec<&str>) -> PyResult<()> {
        let mut entries = Vec::new();
        let mut ignore_set = HashSet::new();
        for extstr in ignore {
            for val in extstr.split(',') {
                ignore_set.insert(val.to_string().to_lowercase());
            }
        }
        for dir in dirs {
            let mut files = HashSet::new();
            for file in WalkDir::new(&dir)
                .into_iter()
                .filter_map(Result::ok)
                .filter(|e| {
                    !e.file_type().is_dir()
                        && e.path()
                            .extension()
                            .map(|ext| {
                                !ignore_set.contains(&ext.to_str().unwrap_or("").to_lowercase())
                            })
                            .unwrap_or(true)
                })
            {
                if let Ok(suffix) = file.path().strip_prefix(&dir) {
                    files.insert(suffix.display().to_string());
                } else {
                    panic!(
                        "Internal Error: File {} is not in directory {}!",
                        file.path().display(),
                        &dir
                    );
                }
            }
            entries.push((dir.to_string(), files));
        }
        conflicts("Directories", "Files", &entries)?;
        Ok(())
    }

    #[pyfunction]
    fn get_masters(filename: String) -> PyResult<Vec<String>> {
        let mut plugin = Plugin::new(GameId::Morrowind, Path::new(&filename));
        plugin
            .parse_file(true)
            .unwrap_or_else(|e| eprintln!("Error when parsing file: {}", e));
        // FIXME: Python error handling
        let list = plugin.masters().unwrap();
        Ok(list)
    }

    #[pyfunction]
    fn dds_dimensions(file: String) -> PyResult<(u32, u32)> {
        let (width, height) = get_dds_dimensions(file)?;
        Ok((width, height))
    }

    #[pymodule]
    /// A Python module implemented in Rust.
    fn portmod(_: Python, m: &PyModule) -> PyResult<()> {
        m.add_wrapped(wrap_pyfunction!(file_conflicts))?;
        m.add_wrapped(wrap_pyfunction!(get_masters))?;
        m.add_wrapped(wrap_pyfunction!(dds_dimensions))?;
        m.add_wrapped(wrap_pyfunction!(parse_package_metadata))?;
        m.add_wrapped(wrap_pyfunction!(parse_category_metadata))?;
        m.add_wrapped(wrap_pyfunction!(parse_yaml_dict))?;
        m.add_wrapped(wrap_pyfunction!(parse_yaml_dict_dict))?;
        m.add_wrapped(wrap_pyfunction!(parse_groups))?;
        m.add_wrapped(wrap_pyfunction!(parse_news))?;

        Ok(())
    }

    create_exception!(portmod, Error, pyo3::exceptions::Exception);
}
