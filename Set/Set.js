function Set() {
  let items = {}// 对象
  /*
  this.has =function (value) {
    return value in items;
  }
  */
  this.has = function (value) {
    return items.hasOwnProperty (value)
  }
  
  this.add = function (value) {
    if (!this.has (value)) {
      items[value] = value;
      return true;
    }
    return false;
  }
  
  this.remove = function (value) {
    if (this.has (value)) {
      delete items[value];
      return true;
    }
    return false;
  }
  
  this.clear = function () {
    items = {}
  }
  
  this.size = function () {
    return Object.keys (items).length;         // 浏览器兼容
  }
  // 不能用 for in
  this.sizeLegacy = function () {
    let count = 0;
    for (let key in items) {
      if (items.hasOwnProperty (key)) {
        ++count;
      }
      return count;
    }
  }
  
  this.values = function () {
    let values = [];
    for (let i = 0, keys = Object.keys (items); i < keys.length; i++) {
      values.push (items[keys[i]]);
    }
    return values;
  }
  
  this.valuesLegacy = function () {
    let values = [];
    for (let key in items) {
      if (items.hasOwnProperty (key)) {
        values.push (items[key])
      }
    }
    return values;
  }
  
  this.union = function (otherSet) {
    let unionSet = new Set ();
    
    let values = this.values ();
    for (let i = 0; i < otherSet.length; i++) {
      unionSet.add (values[i]);
    }
    
    values = otherSet.values ();
    for (let i = 0; i < otherSet.length; i++) {
      unionSet.add (values[i]);
    }
    
    return unionSet;
  }
  
  this.intersection = function (otherSet) {
    let intersectionSet = new Set ();
    
    let values = this.values ();
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has (values[i])) {
        intersectionSet.add (values[i])
      }
    }
    return intersectionSet;
  }
  
  this.difference = function (otherSet) {
    let differenceSet = new Set ();
    
    let values = this.values ();
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has (values[i])) {       //
        differenceSet.add (values[i])
      }
    }
    return differenceSet;
  }
  
  this.subset = function (otherSet) {
    if (this.size () > otherSet.length) {
      return false;
    }else{
      let values=this.values();
      for(let i=0;i<otherSet.length;i++){
        if(!otherSet.has(values[i])){
          return false;
        }
      }
      return true;
    }
  }
  
}

/*

let set=new  Set();
set.add(123)
console.log(set.has(222));
set.add(666)
console.log(set.size());
console.log(set.values());
*/

