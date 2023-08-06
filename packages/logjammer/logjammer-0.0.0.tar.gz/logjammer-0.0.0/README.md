# logjammer

A personal data warehouse system.

Features:

* Unix-y components for ingestion,  can be used independently
* Automation-friendly CLI tool for ingesting data
* CLI tool for querying data
* Lightweight web frontend for querying data
* Data stored in SQLite DB, with a directory for binary artifacts
  * Unsurprising! Portable! Backupable with standard file backup mechanisms!
  * Easy to hook into for integration with other tools
