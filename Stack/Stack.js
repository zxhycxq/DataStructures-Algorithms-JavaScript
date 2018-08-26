/*只能在某一端添加或删除数据-后进先出-可以把栈看成是数组的一个子集-桌子上的书*/
function Stack() {
  let items = []
  
  this.push = function (ele) {
    items.push (ele)
  }
  
  this.pop = function () {
    return items.pop ()
  }
  
  this.peek = function () {
    return items[items.length - 1]
  }
  
  this.isEmpty = function () {
    return items.length == 0
  }
  
  this.size = function () {
    return items.length
  }
  
  this.clear = function () {
    items.length = 0
  }
  
  this.print = function () {
    console.log (items.toString ());
  }
  
}

let stack = new Stack ();

stack.push (666)
stack.push (888)
// console.log (stack.isEmpty ());
stack.peek (888)
stack.push (111)
// console.log (stack.size ());
// console.log(stack.print());


// es6
class StackES6 {
  constructor() {
    this.items = []
  }
  
  push(ele) {
    this.items.push (ele)
  }
  
}

//WeakMap

/*
const items = new WeakMap ()

class Stack2 {
  constructor() {
    items.set (this, [])
  }
  
  push(ele) {
    let s = items.get (this)
    s.push (ele)
  }
}
*/

let Stack3 = (
  function () {
    const items = new WeakMap ()
    
    class stack {
      constructor() {
        items.set (this, [])
      }
      
      //
    }
  }
) ()


//十进制转其他进制

function baseConverter(num, base) {
  var remStack = new Stack (),
    rem,
    baseString = '',
    digits = '0123456789ABCDEF';
  
  while (num > 0) {
    rem = Math.floor (num % base);
    remStack.push (rem);
    num = Math.floor (num / base);
  }
  
  while (!remStack.isEmpty ()) {
    baseString += digits [remStack.pop ()]
  }
  
  return baseString
}

console.log (baseConverter (14, 16));
console.log (baseConverter (3, 2));
console.log (baseConverter (3, 10));


//------------

var isValid = function (s) {
  let stack = []
  let mapList = {
    '(': -1,
    ')': 1,
    '[': -2,
    ']': 2,
    '{': -3,
    '}': 3,
  }
  
  for (let i=0; i < s.length; i++) {
    console.log(`%c--i-- `, 'color:blue;font-weight:bold', i)
    if (mapList[s[i]] < 0) {
      stack.push (s[i])
      console.log(`%c--stack-- `, 'color:blue;font-weight:bold', stack)
    } else {
      let last = stack.pop ()
      console.log(`%c--mapList[last]-- `, 'color:blue;font-weight:bold', mapList[last])
      console.log(`%c--mapList[s[i]]-- `, 'color:blue;font-weight:bold', mapList[s[i]])
      if (mapList[last] + mapList[s[i]] != 0) {
        return false
      }
    }
  }
  if(stack.length>0) return false
  return true
}
//()[]{}   "([)]"     -1 -2 1 2
