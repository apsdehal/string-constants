/**
 * Module containing all kind of string constants
 * whitespace: a string containing all characters considered whitespace
 * lowercase: a string containing all characters considered lowercase letters
 * uppercase: a string containing all characters considered uppercase letters
 * asciiLowercase: a string containing all characters considered lowercase ascii
 * asciiUppercase: a string containing all characters considered uppercase ascii
 * asciiLetters: a string containing all characters considered ascii
 * letters: a string containing all characters considered letters
 * digits: a string containing all characters considered decimal digits
 * hexdigits: a string containing all characters considered hexadecimal digits
 * octdigits: a string containing all characters considered octal digits
 * punctuation: a string containing all characters considered punctuation
 * printable: a string containing all characters considered printable
 */

var whitespace = ' \t\n\r\v\f';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var letters = lowercase + uppercase;
var asciiLowercase = lowercase;
var asciiUppercase = uppercase;
var asciiLetters = asciiLowercase + asciiUppercase;
var digits = '0123456789';
var hexdigits = digits + 'abcdef' + 'ABCDEF';
var octdigits = '01234567';
var punctuation = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
var printable = digits + letters + punctuation + whitespace;

module.exports = {
  whitespace: whitespace,
  lowercase: lowercase,
  uppercase: uppercase,
  letters: letters,
  asciiLowercase: asciiLowercase,
  asciiUppercase: asciiUppercase,
  asciiLetters: asciiLetters,
  digits: digits,
  hexdigits: hexdigits,
  octdigits: octdigits,
  punctuation: punctuation,
  printable: printable
};
