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
  _.each(bucket, function(item) {
    if(item[0] === k) {
      tuplet = item;
    }
  })
  return tuplet[1];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var oldBucket = this._storage.get(i);
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
