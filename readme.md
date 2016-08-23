# uniq-with

> Remove duplicates based on a predicate function.

[![build status](https://img.shields.io/travis/queckezz/uniq-with.svg?style=flat-square)](https://travis-ci.org/queckezz/uniq-with)
[![npm version](https://img.shields.io/npm/v/uniq-with.svg?style=flat-square)](https://npmjs.org/package/uniq-with)
[![dependency status](https://img.shields.io/david/queckezz/uniq-with.svg?style=flat-square)](https://david-dm.org/queckezz/uniq-with)
[![license](https://img.shields.io/npm/l/uniq-with.svg?style=flat-square)](./license)
[![code style: standard](https://img.shields.io/badge/code-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

## Installation

```bash
$ npm install uniq-with
```

## Example

```js
const uniqWith = require('uniq-with')

const data = [
  { id: 1 },
  { id: 5 },
  { id: 2 },
  { id: 2 },
  { id: 2 },
  { id: 5 }
]

console.log(uniqWith((a, b) => a.id === b.id, data))

// ->
// [
//   { id: 1 },
//   { id: 5 },
//   { id: 2 }
// ]
```

## Tests

```bash
$ npm test 
```

## License

[MIT](./license)

