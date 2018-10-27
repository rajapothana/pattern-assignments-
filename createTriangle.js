const {createTriangleTypeOf} = require("./src/patternsLibrary.js")

const main  = function () {
  let typeOfTriangle = process.argv[2];
  let height = process.argv[3];
  console.log(createTriangleTypeOf(typeOfTriangle,height));
}
main();
