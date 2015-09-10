# convert-seconds [![Build Status](https://travis-ci.org/radiovisual/convert-seconds.svg)](https://travis-ci.org/radiovisual/convert-seconds)
> Convert seconds to hours, minutes, seconds

##Install
```sh
$ npm install --save convert-seconds
```

##Usage

Pass in numbers (as `number` or `string` objects), and get an object in return:

```js
var convert = require('convert-seconds');

convert(3661);
// => { hours: 1, minutes: 1, seconds: 1 }

convert(3661).hours;
// => 1

convert('3661').minutes;
// => 1

convert(3661).seconds;
// => 1

```

##License

MIT @ [Michael Wuergler](http://www.numetriclabs.com)


