var Set = function(){
  var set = Object.create(setPrototype);
  set.storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this.storage.push(item);
};

setPrototype.contains = function(item){
  return _.contains(this.storage, item);
};

setPrototype.remove = function(item){
  this.storage = _.filter(this.storage, function(node) {
    node !== item;
  })
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
