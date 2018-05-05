// 输入某个数组中的元素
let arrayDemo = [111, 345, 567787, 78, 9]
for (let i = 0; i < arrayDemo.length; i++) {
  console.log (arrayDemo[i]);
}
// 斐波那契数列      第一个数字是1，第二个是2，从第三个开始，每一项都等于前两项之和。
var fibonacci = [];
fibonacci[0] = 1;
fibonacci[1] = 2;

for (var m = 2; m < 20; m++) {
  fibonacci[m] = fibonacci[m - 1] + fibonacci[m - 2];
}
/*

for (var n = 0; n < fibonacci.length; n++) {
  console.log (fibonacci[n]);
}
*/
// push js中数组可修改，c/java等不可，需重新创建
var arrayPush = [1, 22, 3, 342, 88, 6666666, 7]
arrayPush[arrayPush.length] = 666;
console.log ('arrayPush2', arrayPush);

arrayPush.push (999)
console.log ('arrayPush2', arrayPush);

//unshift 插入元素到首位  首先腾出第一个，将其他元素向右移动一位，循环数组中的元素，
// 从最后一位（数组长度加1）开始，将其对应的前一个元素的值赋给他，依次处理。最后将添加的值赋值给第一个元素[0]

for (var z = arrayDemo.length; z >= 0; z--) {
  arrayDemo[z] = arrayDemo[z - 1]
}
arrayDemo[0] = -1;
// console.log('arrayDemo-unshift ',arrayDemo);

//
console.log ('unshift-2', arrayPush.unshift (-2));
// console.log(`--1`,arrayPush);
console.log ('unshift-3', arrayPush.unshift (-3, 2));
// console.log(`--2`,arrayPush);

//pop
console.log (`pop`, arrayPush.pop ());

//shift 首位删除一个元素
console.log ('shift,', arrayPush.unshift ());
console.log ('arrayPush', arrayPush);
//splice
var splice1 = arrayPush.splice (2, 1)
// console.log(splice1);
console.log ('arrayPush2', arrayPush);
var splice2 = arrayPush.splice (2, 0, 888, 999)
// console.log(arrayPush);

//迭代二维数组
var averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 72];

function consoleMatrix(arrdemo) {
  for (var i = 0; i < arrdemo.length; i++) {
    for (var j = 0; j < arrdemo[i].length; j++) {
      // console.log (arrdemo[i][j]);
    }
  }
}

consoleMatrix (averageTemp)

//conact
var ArrayConcat = arrayPush.concat (arrayDemo)
// console.log('concat',ArrayConcat);

//迭代器
var isEven = function (m) {
  return m % 2 == 0
}
//every some
// console.log(ArrayConcat.every(isEven));
// console.log(ArrayConcat.some(isEven));

ArrayConcat.forEach (function (n) {
  // console.log(n%2==0);
})
// map      filter         reduce
// console.log(`map`,ArrayConcat.map(isEven));
// console.log(`filter`,ArrayConcat.filter(isEven));
// console.log(`ArrayConcat--`,ArrayConcat);

var reducedemo = ArrayConcat.reduce (function (pre, cur, index) {
  return pre + cur;
});
// console.log(`reducedemo`,reducedemo);

// for of
for (let n of arrayDemo) {
  // console.log(n%2==0?'even':'odd');
}

//entries   keys  values
var entyies1 = arrayPush.entries ()
// console.log(entyies1.next().value);
// console.log(entyies1.next().value);

var keys1 = arrayPush.keys ()
// console.log(keys1.next());

//from根据已有数组创建一个新数组，还可以传入用来过滤值的参数
let arr2 = Array.from (arrayPush)
let arr2From = Array.from (arrayPush, x => (
    x % 2 == 0
))
// console.log('from',arr2);
// console.log(arr2From);

// array.of 根据传入的参数创建一个新数组      ，也可复制已有数组
let arrayOf = Array.of (11)
// console.log(`arrayOf`,arrayOf);
let arrayCopy = Array.of (...arrayPush)
// console.log(arrayCopy);

// fill静态值填充数组、创建和初始化数组的时候比较方便

// console.log(arrayPush.fill(2,3));
// console.log(Array(3).fill(666));

//copyWithin
// console.log(arrayPush.copyWithin(1,2,3));
// console.log(arrayPush);

//reverse
console.log (arrayPush.reverse ());
//sort
console.log (arrayPush.sort ());
arrayPush.sort (function (a, b) {
  // return a-b
})

function compareNum(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}
arrayPush.sort(compareNum)

//indexOf 返回与参数匹配的第一个元素的索引
// console.log(arrayPush.indexOf(666));
//find
function multipleOf3(element,index,array) {
  return element%3==0
}
console.log(arrayPush.find(multipleOf3));
console.log(arrayPush.findIndex(multipleOf3));
//includes
console.log(arrayPush.includes(3));
console.log(arrayPush.includes(3,-3));

//tostring
console.log(arrayPush.toString());
