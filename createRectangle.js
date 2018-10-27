const {createRectangleTypeOf} = require("./src/patternsLibrary.js")

const main = function() {
  let typeOfRectangle = process.argv[2];
  let length = +process.argv[3];
  let width = +process.argv[4];
 console.log(createRectangleTypeOf(typeOfRectangle,length,width));
}

main();
