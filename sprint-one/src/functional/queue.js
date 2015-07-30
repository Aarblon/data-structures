var Queue = function(){
  var someInstance = {};
  var size = 0;
  var key = 0;
  var front;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    if(size === 0) {
      key = 0;
    }
    storage[key] = value;
    key++;
    size++;
  };

  someInstance.dequeue = function(){
    front = storage[key - size]
    delete storage[key - size];
    size && size--;
    return front;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
