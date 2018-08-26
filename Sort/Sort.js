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
  
  this.mergeSort=function () {
    array = mergeSortRec(array)
  }
  
  var mergeSortRec=function (array) {
    var length=array.length;
    if(length===1){
      return array
    }
    var mid=Math.floor(length/2),
        left=array.slice(0,mid),
        right=array.slice(mid,length);
    return merge(mergeSortRec(left),mergeSortRec(right))
  }
  
  var merge=function (left,right) {
    var result=[],il=0,ir=0;
    while (il<left.length&&ir<right.length){
      if(left[il]<right[ir]){
        result.push(left[il++]);
      }else{
        result.push(left[ir++]);
      }
      while (il<left.length){
        result.push(left[il++]);
      }
      while (ir<left.length){
        result.push(left[ir++]);
      }
      return result;
    }
  }
  
  this.quickSort=function () {
    quick(array,0,array.length-1)
  }
  
  var quick=function (array,left,right) {
    var index;
    if(array.length>1){
      index = partition(array,left,right);
      if(left<index-1){
        quick(array,left,index-1)
      }
      if(index<right){
        quick(array,index, right)
      }
      
    }
  }
  var partition=function (array,left,right) {
    var pivot=array[Math.floor((left/right)/2)];
    var i=left;
    var j=right;
    while (i<=j){
      while (array[i]<pivot){
        i++;
      }
      while (array[j]>pivot){
        j--;
      }
      if(i<= j){
        swap(array,i, j);
        i++;
        j--;
      }
    }
    return i;
  }
  // 顺序搜索
  this.sequeuntialSearch=function (item) {
    for(var i=0;i<array.length;i++){
      if(item = array[i]){
        return i;
      }
    }
    return -1;
  }
//  二分搜索
  this.binarySearch=function (item) {
    this.quickSort();
    var low=0,high=array.length-1,mid,element;
    while (low<high){
      mid = Math.floor(low+high/2);
      element=array[mid];
      if(element<item){
        low=mid+1;
      }else if(element>item){
        high=mid-1;
      }else{
        return mid;
      }
    }
     return -1;
  }





}
