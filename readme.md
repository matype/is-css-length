# is-css-length [![Build Status](https://travis-ci.org/morishitter/is-css-length.svg)](https://travis-ci.org/morishitter/is-css-length)

Check if a string is CSS value of the length

## Install

```shell
$ npm install is-css-length
```

## Usage

```js
var isLength = require('is-css-length')

isLength(10px) // true
isLength(10)   // false
isLength(0)    // true
isLength(0em)  // false
```

## License

The MIT License (MIT)

Copyright (c) 2015 Masaaki Morishita
