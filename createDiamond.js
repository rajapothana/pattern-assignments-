const {createDiamondTypeOf} = require("./src/patternsLibrary.js")

const main = function(){
  let typeOfDiamond = process.argv[2];
  let height = (Math.ceil((+process.argv[3])/2)*2)-1;
  console.log(createDiamondTypeOf(typeOfDiamond,height));
}

main();
