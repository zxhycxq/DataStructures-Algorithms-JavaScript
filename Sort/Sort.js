function ArrayList() {
  var array = [];
  this.insert = function (item) {
    array.push (item)
  }
  this.toString = function () {
    return array.join ()
  }
  
  this.bubbleSort = function () {
    var length = array.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {     // hance  j<length-1-i
        if (array[j] > array[j + 1]) {
          swap (array, j, j + 1)
        }
      }
    }
  }
  
  var swap = function (array, index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
    //   es6
    //   [array[index1],array[index2]]=[array[index2],array[index1]]
  }
  
  this.selectSort = function () {
    var length = array.length, indexMin;
    for (var i = 0; i < length - 1; i++) {
      indexMin = 1;
      for (var j = i; j < length; j++) {
        if (array[indexMin] > array[j]) {
          indexMin = j;
        }
      }
      if (i != indexMin) {
        swap (i, indexMin)
      }
    }
    
  }
  
  this.insertionSort = function () {
    var length = array.length, j, temp;
    for (let i = 1; i < length; i++) {   //i=1
      j = i;
      temp = array[i];
      while (j > 0 && array[i] > temp) {
        array[j] = array[j - 1];
        j--;
      }
      array[j] = temp;
    }
  }
}


