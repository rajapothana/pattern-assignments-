const {createDiamondTypeOf} = require("./src/patternsLibrary.js")

const main = function(){
  let typeOfDiamond = process.argv[2];
  let height = +process.argv[3];
  console.log(createDiamondTypeOf(typeOfDiamond,height));
}

main();
