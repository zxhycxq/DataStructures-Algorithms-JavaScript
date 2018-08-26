//-------------------const---------------------------------------
const PI = 3.141593
PI > 3.0

Object.defineProperty (typeof global === 'object' ? global : window, 'pi', {
  value: 3.1415926,
  enumerable: true,
  writable: false,
  configurable: false
})

//------------箭头函数-----------------------------------------------------
const odd = (num) => {
  num + 1
}


//------------默认参数-----------------------------------------------------
//es6
function defaultParm(x, y = 5, z = 660) {
  return x + y + z;
}

// console.log(`es6  `,defaultParm(1,2,3));   // 6
// console.log(`es6  `,defaultParm(1));       // 666

//es5
function defaultParmEs5(x, y, z) {
  if (y === undefined) {
    y = 5
  }
  if (z === undefined) {
    y = 660
  }
  return x + y + z;
}

// console.log(`es5  `,defaultParmEs5(1,2,3));   // 6
// console.log(`es5  `,defaultParmEs5(1));

//--------------Rest Parameter-----------------
function restParam(x, y, ...z) {
  return (
      x + y
  ) * z.length
}

// console.log(restParam(1,2,3,4,5));      // 9

function restParamEs5(x, y) {
  var a = Array.prototype.slice.call (arguments, 2)
  console.log (`a`, a);                     //[ 3, 4, 5 ]
  console.log (`arguments`, arguments);    //{ '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
  return (
      x + y
  ) * a.length
}

// console.log(restParamEs5(1,2,3,4,5));

//--------------模板字符串-----------------
var customer = {name: 'qaz'};

//--------------对象-----------------

var m = 0, n = 1;
obj = {m, n}
// console.log(`obj-1 `,obj);

var x = 222, y = 333;
obj2 = {x: x, y: y}
// console.log(`obj-2 `,obj2);

// function ww() {
// console.log(1);
// }
// let obj3={
//   a:'123',
//   ['b'+ww()]:666
// }


//--------
fun = {
  a(a) {
    console.log (a);
  },
  a(b) {
    console.log (b);
  }
}

funEs5 = {
  a: function (a) {
    console.log (a);
  },
  back: function (b) {
    console.log (b);
  }
}

//-------------------------
var list = [11, 22, 33];
var [a, , b] = list;
[b, a] = [a, b]

var listEs5 = [33, 44, 55];
var m = listEs5[0], n = listEs5[2]
var tmp = m;
m = n;
n = tmp;


// class
class classDemo {
  constructor(id, x, y) {
    this.id = id;
    this.move (x, y)
  }
  
  move(x) {
    this.x = x;
    this.y = y;
  }
}

var classEs5 = function (id, x, y) {
  this.id = id;
  this.move (x, y)
}

classEs5.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
}


//find findindex
[12,3,4].find(x => x>3)         //12
[12,3,4].findIndex(x => x>3)    //0

//es5
[12,3,4].filter(function (x) {
  return x>3
})
