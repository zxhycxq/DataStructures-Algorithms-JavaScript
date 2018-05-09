function BinarySearchTree() {
  var Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
  var root = null;
  
  this.insert = function (key) {
    var newNode = new Node (key);
    
    var insertNode = function (node, newNode) {
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          insertNode (node.left, newNode)
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          insertNode (node.right, newNode)
        }
      }
    }
    
    if (root === null) {
      root = newNode;
    } else {
      insertNode (root, newNode)
    }
  }
  var inOrderTraverseNode=function (node,callback) {
    if(node!==null){
      inOrderTraverseNode(node.left,callback)
      callback(node.key);
      inOrderTraverseNode(node.right,callback)
    }
  }
  
//  中序遍历
  this.inOrderTraverse=function (callback) {
    inOrderTraverseNode(root, callback);
  }
  
  var preOrderTraverseNode=function (node,callback) {
    if(node !== null){
      callback(node.key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  }
  
//  先序遍历 打印结构化文档
  this.preOrderTraverse=function (node,callback) {
    preOrderTraverseNode(root, callback);
  }
  
//  后序遍历 计算一个目录和他的子目录中所有文件所占空间的大小
  var postOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  };
  this.postOrderTraverse = function(callback){
    postOrderTraverseNode(root, callback);
  };
  
  this.min=function () {
    return minNode(root);
  }
  
  var minNode=function (node) {
    if(node){
      while (node&&node.left!==null){
        node = node.left;
      }
      return node.key;
    }
    return null;
  }
}
