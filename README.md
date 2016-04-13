# a-split
Split an array into arrays of a specific length

## Install

```sh
$ npm install --save a-split
```

## Example

```js
var split = require('a-split');

console.log(split([1, 2, 3, 4, 5, 6], 2));

// -> [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]

console.log(split([1, 2, 3, 4, 5, 6, 7], 2));

// -> [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7 ] ]
```

### `require('a-split')(list, length)`

**Arguments**:

- `list`: The array to split up
- `length`: The maximum amount of items a partial can have

**Returns**: Returns an array into arrays of a specific length

## License

&copy; 2016 Vikram Jadhav. MIT License
