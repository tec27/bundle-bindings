#bundle-bindings
A drop-in replacement for [bindings](https://github.com/TooTallNate/node-bindings) in bundled modules (e.g. ones that have been browserified). bindings has issues finding the module root in such cases (since all modules are in one file, its stack trace search doesn't work). This module avoids this issue by not attempting to traverse the tree at all, and instead looking directly in the current directory.

You *probably* don't need this, unless you're doing weird stuff.

[![NPM](https://img.shields.io/npm/v/bundle-bindings.svg?style=flat)](https://www.npmjs.org/package/bundle-bindings)

[![NPM](https://nodei.co/npm/bundle-bindings.png)](https://www.npmjs.org/package/bundle-bindings)

## Usage
Insert in the `package.json` of the module you wish to bundle as a browser replacement.

e.g.
```js
{
// ...
  "browser": {
    "bindings": "bundle-bindings"
  }
// ...
}
```

## Installation
`npm install bundle-bindings`

## License
MIT
