// 先进先出
function Queue() {
  let items = []
  this.enqueue = function (ele) {
    items.push (ele)
  }
  this.dequeue = function (ele) {
    return items.shift ()
  }
  this.front = function () {
    return items[0]
  }
  this.isEmpty = function () {
    return items.length == 0;
  }
  this.size = function () {
    return items.length
  }
  this.print = function () {
    console.log (items.toString ());
  }
}

// let queue1 = new Queue ();
// console.log (queue1.isEmpty ());
// queue1.enqueue (12, 34)
// queue1.enqueue (22, 334)
//
// queue1.dequeue ()
// queue.dequeue()
// console.log(queue);

// queue1.print ()


/*
let queueES6 = (
    function () {
      const items = new WeakMap;
      
      class queue2 {
        constructor() {
          items.set (this, [])
        }
        
        enqueue(ele) {
          let q = items.get (this);
          q.push (ele)
        }
        
        dequeue(ele) {
          let q = items.get (this)
          let r = q.shift ();
          return r;
        }
        
        //
        
      }
      
      return queue2
    }
) ()*/

// 最小优先队列
/*function PriorityQueue() {
  let items = [];
  
  function QueueElement(ele, priority) {
    this.ele = ele;
    this.priority = priority
  }
  
  this.enqueue = function (ele, priority) {
    let queueElement = new QueueElement (ele, priority)
    let added = false;
    for (let i = 0; i < items.length; i++) {
      if (queueElement.priority < items[i].priority) {
        items.splice (i, 0, queueElement);
        added = true;
        break;
      }
    }
    if (!added) {
      items.push (queueElement)
    }
    this.print = function () {
      for (let i = 0; i < items.length; i++) {
        console.log (`${items[i].ele}-${items[i].priority}`);
      }
    }
  }
  
}*/

// let priorityQueue = new PriorityQueue ();
// priorityQueue.enqueue ("张三", 2);
// priorityQueue.enqueue ("李四", 1);
// priorityQueue.enqueue ("王麻子", 1);
// priorityQueue.print ();

// 击鼓传花 循环队列

function hotPotato(nameList, num) {
  let queue = new Queue ();
  
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue (nameList[i])
  }
  queue.print()
  let eliminated = '';
  while (queue.size () > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue (queue.dequeue ())
    }
    eliminated = queue.dequeue ();
    console.log ('被淘汰'+eliminated);
  }
  console.log(queue.size());
  return queue.dequeue ()
}

let nameArray=['张三','李四','王五','赵六','王朝','马汉']
let winner=hotPotato(nameArray,4)
console.log(`赢家是--  `,winner);
// todo 函数return

