var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  const array = new Array();
  array.unshift(element);
  return array;
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array;
}

function addElementtoEndOfArray(array, element){

}

function destructivelyAddElementToEndOfArray (array, element){
  array.push(element);
  return array;
}
