var Queue = function() {
  this.storage = {};
  this.count = 0;
  this.front = 0;
  this.key = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.enqueue = function(value) {
    if(this.count === 0) {
      this.key = 0;
    }
    this.storage[this.key] = value;
    this.key++;
    this.count++;
  };

Queue.prototype.dequeue = function() {
     this.front = this.storage[this.key - this.count]
    delete this.storage[this.key - this.count];
    this.count && this.count--;
    return this.front;
  };

Queue.prototype.size = function() {
    return this.count;
  };
