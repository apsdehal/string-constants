# string-constants
[![NPM Version](https://img.shields.io/npm/v/string-constants.svg?style=flat)](https://www.npmjs.com/package/string-constants)

Various string definitions for easy use

## Install

> npm install string-constants

> bower install string-constants

## Usage

### CommonJS

```js
var stringConstants = require('string-constants');

/**
 * stringConstants variable now contains following properties:
 *
 * whitespace: All characters considered whitespace
 * lowercase: All characters considered lowercase letters
 * uppercase: All characters considered uppercase letters
 * asciiLowercase: All characters considered lowercase ascii
 * asciiUppercase: All characters considered uppercase ascii
 * asciiLetters: All characters considered ascii
 * letters: All characters considered letters
 * digits: All characters considered decimal digits
 * hexdigits: All characters considered hexadecimal digits
 * octdigits: All characters considered octal digits
 * punctuation: All characters considered punctuation
 * printable: All characters considered printable
 */

console.log(stringConstants.digits);
// 0123456789
```

### Browser

Include script from `bower_components/string-constants/string-constants.js`

This will expose stringConstants variable to current context

```
console.log(this.stringConstants.digits);
// 0123456789
```

### AMD

```js
define(['path-here'], function (stringConstants) {
  
});
```

## License

MIT © [Amanpreet Singh](https://apsdehal.in)
