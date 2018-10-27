const generateLine = function(character,noOfCharacters) {
  let line ="";
  for(let characterCount = 0;characterCount < noOfCharacters;characterCount++) {
    line += character;
  }
  return line;
}

const generateFilledRectangle = function(length,width) {
  let numberOfLines = 1;
  let line = generateLine("*",length);
  let rectangle ="";
  let delimitor = "";
  while(numberOfLines <= width) {
    rectangle += delimitor+line;
    numberOfLines++;
    delimitor = "\n";
  }
  return rectangle;
}

const generateMiddleLines = function(length,width) {
  let middleLine = "*";
  for(let emptycharacter = 2;emptycharacter < length;emptycharacter++) {
    middleLine += " ";
  }
  middleLine += "*";
  return middleLine;
}

const generateEmptyRectangle = function(length,width) { 
  let numberOfLines = 1; 
  let middlelines = generateMiddleLines(length);
  let emptyRectangle = generateLine("*",length) +"\n";
  while(numberOfLines < width-1) {
    emptyRectangle += middlelines +"\n";
    numberOfLines++;
  }
  emptyRectangle += generateLine("*",length);
  return emptyRectangle;
}
const generateAlternativeRectangle = function(length,width) {
  let alternatingRectangle = "";
  let delimitor = "";
  for(let row = 1;row <= width;row++) {
    let character = "-";
    if(row%2 == 1) {
      character = "*";
    }
    alternatingRectangle += delimitor+generateLine(character,length)
    delimitor = "\n";
  }
  return alternatingRectangle;
}
const createRectangleTypeOf = function (typeOfRectangle,length,width) {
  if(typeOfRectangle =="filled"){
    return generateFilledRectangle(length,width);
  }
  if(typeOfRectangle =="empty"){
    return generateEmptyRectangle(length,width);
  }
  if(typeOfRectangle =="alternate"){
    return generateAlternativeRectangle(length,width);
  }
}


const generateLeftAlignedTriangle = function(height) {
  let delimitor = "";
  let alignedTriangle = "";
  let line = "";
  for(let row = 1;row <= height;row++) {
    line = line + "*";
    alignedTriangle += delimitor+line;
    delimitor = "\n"
  }
  return alignedTriangle;
}

const generateRightAlignedTriangle = function(height) {
  let delimitor ="";
  let alignedTriangle ="";
  for(let row = 0; row < height;row++) {
    let line ="";
    let character =" ";
    for(let position = 1;position < (height-row);position++) {
      line += character;
    }
    character ="*"
    for(let position = (height-row);position <= height ;position++) {
      line += character;
    }
    alignedTriangle += delimitor+line;
    delimitor = "\n";
  }
  return alignedTriangle;
}
const createTriangleTypeOf = function (typeOfTriangle,height) {
  if(typeOfTriangle == "left") {
    return generateLeftAlignedTriangle(height);
  }
  if(typeOfTriangle == "right") {
    return generateRightAlignedTriangle(height);
  }
}


const generateFilledDiamond = function(height) {
  let filledDiamondPattern ="";
  let delimitor ="";
  let noOfCharacters = Math.floor(height/2);
  for(let row = 1;row <= height;row+=2) {
    filledDiamondPattern += delimitor+generateLine(" ",noOfCharacters)+generateLine("*",row);
    noOfCharacters--;
    delimitor ="\n";
  }
  let noOfSpaces = 1;
  let noOfStars = height-2;
  let noOfLines = Math.floor(height/2);
  for(let row = 0; row < noOfLines;row++){
    filledDiamondPattern += delimitor + generateLine(" ",noOfSpaces) + generateLine("*",noOfStars);
    delimitor ="\n";
    noOfSpaces++;
    noOfStars-=2;
  }
  return filledDiamondPattern;
}

const generateHollowDiamond = function(height){
  if(height <= 1){
    return generateLine("*",height);
  }
  let noOfSpaces = Math.floor(height/2);
  let diamond= generateLine(" ",noOfSpaces) + "*"; 
  noOfSpaces--;
  let delimitor ="\n";
  for(let row = 1; row < height-1; row += 2) {
    diamond += delimitor + generateLine(" ",noOfSpaces) + "*" + generateLine(" ",row) +"*";
    noOfSpaces--;
  }
  //2nd part
  delimitor ="\n";
  noOfSpaces = 1;
  for(let row = (height-4); row > 0; row-=2) { 
    diamond += delimitor + generateLine(" ",noOfSpaces) + "*" + generateLine(" ",row) +"*"; 
    noOfSpaces++;
  }
  diamond += delimitor+generateLine(" ",noOfSpaces) + "*";
  return diamond;
}
const generateAngleDiamond = function(height) {
  if(height <= 1){
    return generateLine("*",height);
  }
  let noOfSpaces = Math.floor(height/2);
  let diamond= generateLine(" ",noOfSpaces) + "*"; 
  noOfSpaces--;
  let delimitor ="\n";
  for(let row = 1; row < height-2; row += 2) {
    diamond += delimitor + generateLine(" ",noOfSpaces) + "/" + generateLine(" ",row) +"\\";
    noOfSpaces--;
  }
  diamond += delimitor + "*" + generateLine(" ",height-2) + "*"

  //2nd part
  delimitor ="\n";
  noOfSpaces = 1;
  for(let row = (height-4); row > 0; row-=2) { 
    diamond += delimitor + generateLine(" ",noOfSpaces) + "\\" + generateLine(" ",row) +"/"; 
    noOfSpaces++;
  }
  diamond += delimitor+generateLine(" ",noOfSpaces) + "*";
  return diamond;
}

const createDiamondTypeOf = function (typeOfDiamond,height) {
   height  = (Math.ceil((height)/2)*2)-1;
  if(typeOfDiamond == "filled"){
    return generateFilledDiamond(height);
  }
  if(typeOfDiamond == "hollow"){
    return generateHollowDiamond(height);
  }
  if(typeOfDiamond == "angled"){
    return generateAngleDiamond(height);
  }
}

exports.createRectangleTypeOf = createRectangleTypeOf;
exports.createTriangleTypeOf = createTriangleTypeOf;
exports.createDiamondTypeOf = createDiamondTypeOf;
