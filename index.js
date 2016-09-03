function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(index + ": " + element);
  });
}

function iterate(cb) {
  var array = [1, 2, 3];
  array.forEach(cb);
  return array;
}

function doToArray(array, cb) {
  array.forEach(cb);
}
