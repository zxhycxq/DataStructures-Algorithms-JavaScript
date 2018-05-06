/*后进先出*/
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
