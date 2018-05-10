function Dictionary() {
  var items={};
  
  this.has =function (key) {
    return key in items;
  }
  
  this.set=function (key,value) {
    items[key]=value;
  }
  
  this.delete=function (key) {
    if(this.has(key)){
      delete items[key];
      return true
    }
    return true;
  }
  
  this.get =function (key) {
    return this.has(key)?items[key]:undefined;
  }
  
  this.values=function () {
    var values=[];
    for(var k in items){
      if(this.has(k)){
        values.push(items[k]);
      }
    }
    return values;
  }
  
  this.keys=function () {
    return Object.keys(items);
  }
  
  this.getItems=function () {
    return items;
  }
}

var dictionary = new Dictionary();
dictionary.set('001', '张三');
dictionary.set('002', 'jlisi i');
dictionary.set('003', '王五');
console.log(dictionary.has('003'));
// console.log(dictionary.size());
// console.log(dictionary.keys());
// console.log(dictionary.values());
// console.log(dictionary.getItems());
// console.log(dictionary.get('001'));

module.exports={
  Dictionary
}
