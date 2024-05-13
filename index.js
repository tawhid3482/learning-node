// local module
// const {a, add,  } = require("./local-1");
// console.log(add(2, 5));
// console.log(a)


// build in module
const path = require('path')
console.log(path.dirname('/C:/Project-Level2/learning-node/index.js'))
console.log(path.parse('/C:/Project-Level2/learning-node/index.js'))
console.log(path.join('/C:/Project-Level2/learning-node/','local-1.js'))
