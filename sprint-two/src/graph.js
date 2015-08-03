var Graph = function(){
  this.nodes = [];
};

Graph.prototype.addNode = function(node){
  var newNode = { name: node,
                  links: []
                };
  this.nodes.push(newNode);
};

Graph.prototype.contains = function(node){
  var result = false;
  _.each(this.nodes, function(item) {
    if(item.name === node) {
      result = true;
    }
  })
  return result;
};

Graph.prototype.removeNode = function(node){
  for (var i = 0; i< this.nodes.length; i++) {
    if(this.nodes[i].name === node) {
      this.nodes = this.nodes.slice(0,i).concat(this.nodes.slice(i+1));
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var from;
  var to;
  _.each(this.nodes, function(node) {
    if(node.name === fromNode) {
      from = node;
    }
    if(node.name === toNode) {
      to = node;
    }
  })
  if(_.contains(from.links, to) && _.contains(to.links, from)) {
    return true;
  } else {
    return false;
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var from;
  var to;
  _.each(this.nodes, function(node) {
    if(node.name === fromNode) {
      from = node;
    }
    if(node.name === toNode) {
      to = node;
    }
  })
  from.links.push(to);
  to.links.push(from);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var from;
  var to;
  _.each(this.nodes, function(node) {
    if(node.name === fromNode) {
      from = node;
    }
    if(node.name === toNode) {
      to = node;
    }
  })
  var remove1 = _.indexOf(from.links, to);
  from.links = from.links.slice(0, remove1).concat(from.links.slice(remove1+1));

  var remove2 = _.indexOf(to.links, from);
  to.links = to.links.slice(0, remove2).concat(to.links.slice(remove2+1));

};

Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, function(node) {
    cb(node.name);
  })
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



