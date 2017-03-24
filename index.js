function iterativeLog(array){
  index = 0
  array.forEach(element =>{
    console.log(`${index}: ${element}`)
    index++
  })
}

function iterate(callBack){
  var array = [2, 3, 4]
  callBack(array)
  return array
}

function doToArray (array, callback){
  array.forEach(callback)
}