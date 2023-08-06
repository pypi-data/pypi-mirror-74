# Build Server Client

*Python client for a simple build server*

## Installation

```
pip3 install --user build-server-client
```

## Usage

Setup:

```
git config bsc.server-url "https://<some-simple-build-server>.com"
git config bsc.project "my-proj"  # Identifier registered to build server
```

Build:
```
bsc build
```
