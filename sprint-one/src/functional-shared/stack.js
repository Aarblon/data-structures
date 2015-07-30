var Stack = function() {
  //var count = 0;
  var someInstance = {
    storage: {},
    count: 0
  };

  _.extend(someInstance, stackMethods);

  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};


var stackMethods = {

  push: function(value) {
      this.storage[this.count] = value;
      //storage[someInstance[count]] = value;
      this.count++;
       },
  pop: function() {
    this.count && this.count--;
   var result = this.storage[this.count];
    //var result = storage[count];
    delete this.storage[this.count];
    return result;
  },
  size: function() {return this.count;}
};


