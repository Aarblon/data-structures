var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.count = 0;
  someInstance.front = 0;
  someInstance.key = 0;
  someInstance.storage = {};
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


