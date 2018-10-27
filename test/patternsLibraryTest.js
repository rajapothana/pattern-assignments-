const {deepEqual} = require("assert");
const {createDiamondTypeOf,createTriangleTypeOf,createRectangleTypeOf } = require("../src/patternsLibrary.js")

deepEqual(createRectangleTypeOf("filled",4,3),"****\n****\n****")
deepEqual(createRectangleTypeOf("filled",7,5),"*******\n*******\n*******\n*******\n*******")
deepEqual(createRectangleTypeOf("empty",4,3),"****\n*  *\n****")
deepEqual(createRectangleTypeOf("empty",7,5),"*******\n*     *\n*     *\n*     *\n*******")
deepEqual(createRectangleTypeOf("alternate",4,3),"****\n----\n****")
deepEqual(createRectangleTypeOf("alternate",7,5),"*******\n-------\n*******\n-------\n*******")

deepEqual(createTriangleTypeOf("left",3),"*\n**\n***")
deepEqual(createTriangleTypeOf("left",6),"*\n**\n***\n****\n*****\n******")
deepEqual(createTriangleTypeOf("right",3),"  *\n **\n***")
deepEqual(createTriangleTypeOf("right",6),"     *\n    **\n   ***\n  ****\n *****\n******")

deepEqual(createDiamondTypeOf("filled",3)," *\n***\n *")
deepEqual(createDiamondTypeOf("filled",5),"  *\n ***\n*****\n ***\n  *")
deepEqual(createDiamondTypeOf("hollow",3)," *\n* *\n *")
deepEqual(createDiamondTypeOf("hollow",6),"  *\n * *\n*   *\n * *\n  *")
deepEqual(createDiamondTypeOf("angled",3)," *\n* *\n *")
deepEqual(createDiamondTypeOf("angled",5),"  *\n / \\\n*   *\n \\ /\n  *")

console.log("................test passed..............")
