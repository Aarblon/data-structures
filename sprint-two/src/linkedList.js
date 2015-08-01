//This version includes features of doublyLinkedList extra credit
var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    var node = Node(value);
    if(list.head === null) {
      list.head = node;
    }
    if(list.tail === null) {
      list.tail = node;
    }
    node.next = list.head;
    list.head = node;
  };

  list.addToTail = function(value) {
    var node = Node(value);
    node.previous = list.tail;
    if(list.head === null) {
      list.head = node;
    }
    if(list.tail === null) {
      list.tail = node;
    }
    list.tail.next = node;
    list.tail = node;
  };

  list.removeHead = function() {
    var currentHead = list.head.value;
    list.head = list.head.next;
    return currentHead;
  };

  list.contains = function(target) {
    var result = false;
    var searchNode = function(node) {
      if(node.value === target) {
        result = true;
      }
      if(!result && node.next !== null) {
        searchNode(node.next);
      }
    }

    searchNode(list.head)

    return result;
  };

  list.removeTail = function() {
    var oldTail = list.tail;
    list.tail = oldTail.previous;
    return oldTail.value;
  };

  return list;

};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
