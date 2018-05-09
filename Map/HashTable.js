function HashTable() {
  var table=[];
  
  var loseHashTable=function (key) {
    var hash=0;
    for(var i=0;i<key.length;i++){
      hash+=key.charCodeAt(i)
    }
    return hash%37;
  }
  
  this.put =function (key,value) {
    var position=loseHashTable(key);
    table[position]=value;
  };
  
  this.get =function (key) {
    return table[loseHashTable(key)]
  }
  
  this.remove =function (key) {
    table[loseHashTable(key)]=undefined
  }
}

// todo 分离链接
