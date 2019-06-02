function ArrayList() {
  
  var array = [3, 5, 1, 23,4, 2];
  
  this.insert = function(item) {
    array.push(item);
  };
  
  this.toString = function() {
    return array.join();
  };
  
  //插入排序
  this.insertionSort = function() {
    var length = array.length,
      j, temp;
    for (var i = 1; i < length; i++) {
      j = i;
      temp = array[i];
      while (j > 0 && array[j - 1] > temp) {
        array[j] = array[j - 1];
        j--;
      }
      array[j] = temp;
    }
  };
  
}

var array = new ArrayList();
console.log(array.toString());
array.insertionSort();
console.log(array.toString());
