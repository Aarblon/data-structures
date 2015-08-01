var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuplet = [k, v];
  if(this._storage[i] === undefined){
    this._storage[i] = [];
    this._storage[i].push(tuplet);
  }
  this._storage[i].push(tuplet);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[i];
  var tuplet;
  _.each(bucket, function(item) {
    if(item[0] === k) {
      tuplet = item;
    }
  })
  return tuplet[1];
};

HashTable.prototype.remove = function(k){
  debugger;
  this._storage.each(function(bucket) {

    if(bucket !== undefined) {
      bucket.each(function(item) {
        if(item !== undefined) {
          if(item[0] === k) {
            item[0] = null;
            item[1] = null;
            }
         }
      })
    }
  })
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
/*var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuplet = [k, v];
  this._storage.set(i, tuplet);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuplet = this._storage.get(i);
  return tuplet[1];
};

HashTable.prototype.remove = function(k){
  this._storage.each(function(item) {
    if(item !== undefined) {
      if(item[0] === k) {
        item[0] = null;
        item[1] = null;
      }
    }
  })
}; */
