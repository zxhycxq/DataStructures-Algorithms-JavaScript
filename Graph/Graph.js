var Dictionary = require( '../Map/Map');
function Graph() {
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
  var vertices = [];
  var adjList = new Dictionary ();
  
  this.addVertex = function (v) {
    vertices.push (v);
    adjList.set (v, [])
  }
  
  this.addEdge = function (v, w) {
    adjList.get (v).push (w);
    adjList.get (w).push (v);
  }
  
  this.toString = function () {
    var s = '';
    for (var i = 0; i < vertices.length; i++) {
      s += vertices[i] + '->';
      var neightbors = adjList.get (vertices[i]);
      for (var j = 0; j < neightbors.length; j++) {
        s += neightbors[j] + ' ';
      }
      s += '\n';
    }
    return s;
  };
}
var graph = new Graph ();
var myVertices = ['人', '之', '初', '性', '本', '善', '相', '近', '习', '远',];
for (var i = 0; i < myVertices.length; i++) {
  graph.addVertex (myVertices[i])
}


graph.addEdge ('人', '之',)
graph.addEdge ('人', '远',)
graph.addEdge ('人', '相',)
graph.addEdge ('近', '习')
graph.addEdge ('人', '之',)
graph.addEdge ('初', '相',)
graph.addEdge ('性', '本',)
graph.addEdge ('善', '相',)
graph.addEdge ('之', '近',)
graph.addEdge ('初', '远',)
graph.addEdge ('善', '习',)

console.log(graph.toString());
