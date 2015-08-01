var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target){
  var result = false;
  var searchTree = function(tree){
    if(tree.value === target) {
      result = true;
    }
    if (!result && tree.children.length > 0) {
      _.each(tree.children, function(item) {
        searchTree(item);
      })
    }
  };

  searchTree(this);
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
