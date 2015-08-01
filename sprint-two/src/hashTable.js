var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = [];
  var tuplet = [k, v];

  if(this._storage.get(i) === undefined) {
    this._storage.set(i, bucket)
  }

  this._storage.get(i).push(tuplet);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var tuplet;

  if(!bucket) {
    return null;
  }

  for(var j = 0; j < bucket.length; j ++) {
    if(bucket[j][0] === k) {
      return bucket[j][1];
    }
  }

  return null;

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = _.filter(this._storage.get(i), function(item) {
    if(item[0] !== k) {
      return item;
    }
  })

  this._storage.set(i, bucket);

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
