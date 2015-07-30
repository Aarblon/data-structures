var Queue = function(){
  var someInstance = {
    storage: {},
    count : 0,
    front : 0,
    key : 0
  };

  _.extend(someInstance, queueMethods);
  return someInstance;

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
  enqueue: function(value) {
    if(this.count === 0) {
      this.key = 0;
    }
    this.storage[this.key] = value;
    this.key++;
    this.count++;
  },

  dequeue: function() {
     this.front = this.storage[this.key - this.count]
    delete this.storage[this.key - this.count];
    this.count && this.count--;
    return this.front;
  },

  size: function() {
    return this.count;
  }
};



