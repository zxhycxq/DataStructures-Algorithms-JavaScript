function LinkedList() {
  var Node = function (ele) {
    this.ele = ele;
    this.next = ''
  }
  
  var length = 0;
  var head = null;
  
  this.append = function (ele) {
    var node = new Node (ele), current;
    if (head === null) {               // 列表最后一个节点的下一个元素始终是null
      head = node;
    } else {
      current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  };
  this.insert = function (position, ele) {
    if (position >= 0 && position <= length) {
      var node = new Node (ele), previous, index = 0;
      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      length++
      return true;
    } else {
      return false;
    }
  };
  this.removeAt = function (position) {
    if (position > -1 && position < length) {
      var current = head, previous, index = 0;
      if (position === 0) {
        head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      length--;
      return current.ele;
    } else {
      return null;
    }
  }
  this.remove = function (ele) {
    var index = this.indexOf (ele);
    return this.removeAt (index)
  }
  this.indexOf = function (ele) {
    var current = head, index = -1;
    while (current) {
      if (ele === current.ele) {
        return index;
      }
      index++
      current = current.next;
    }
    return -1;
  }
  this.isEmpty = function () {
    return length === 0
  }
  this.toString = function () {
    var current = head, string = '';
    while (current) {
      string = current.ele;
      current = current.next;
    }
    return string;
  }
  
  this.size = function () {
    return length
  }
  this.getHead = function () {
    return head
  }
}

