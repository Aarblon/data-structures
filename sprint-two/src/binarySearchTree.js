var BinarySearchTree = function(value){
  var tree = [];
  var node = {};
  node.value = value;
  node.left = null;
  node.right = null;

  node.insert = function (value) {
    var newNode = BinarySearchTree(value);
    var findSpot = function(node) {

      if(value > node.value) {
        if(node.right === null) {
          node.right = newNode;
        } else {
          findSpot(node.right);
        }
      } else {
        if(node.left === null) {
          node.left = newNode;
        } else {
          findSpot(node.left);
        }
      };
    }

    if(tree.length === 0) {
      tree.push(newNode)
    } else {
      findSpot(tree[0]);
    }
    tree.push(newNode);
  }


  node.contains = function (value) {
  var result = false;
  _.each(tree, function(node) {
    if(node.value === value) {
      result = true;
    }
  })
  return result;
  }

  node.depthFirstLog = function(callback) {
    return _.map(tree, function(node) {
      return callback(node.value);
    })

  }

  tree.push(node);
  return node;



};



/*
 * Complexity: What is the time complexity of the above functions?
 */
