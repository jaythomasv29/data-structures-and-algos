/**
 * Sets - Similar to an array but no order and no duplicates
 * Primary Use: Check for presence of an item
 */

function mySet() {
  var collection = [];
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  this.values = function () {
    return collection;
  };

  this.add = function(element) {
    if(!this.has(element)) {
      collection.push(element)
      return true
    }
    return false
  }

  this.remove = function(element) {
    if(this.has(element)) {
      index = collection.indexOf(element)
      collection.splice(index, 1)
      return true
    } 
    return false
  }

  this.size = function() {
    return collection.length
  }
  // returns the union of two sets
  this.union = function(otherSet) {
    var unionSet = new mySet()
    var firstSet = this.values
    var secondSet = otherSet.values()
    firstSet.forEach(function(e) {
      unionSet.add(e)
    })
    secondSet.forEach(function(e){
      unionSet.add(e)
    })
    return unionSet
  }
  // returns a set that has the same values with another set
  this.intersection = function(otherSet) {
    var intersectionSet = new mySet()
    var firstSet = this.values()
    firstSet.forEach(function(e){
      if(otherSet.has(e)){
        intersectionSet.add(e)
      }
      })
      return intersectionSet
  }

  this.difference = function(otherSet) {
    var differenceSet = new mySet()
    var firstSet = this.values()
    firstSet.forEach(function(e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e)
      }
    })
    return differenceSet
  }

  this.subset = function(otherSet) {
    var firstSet = this.values()
  //   return firstSet.every(function(value) {
  //     return otherSet.has(value)
  //   })
  // }
  console.log(firstSet);
  
}
}

var setA = new mySet()
var setB = new mySet()

console.log(setA.add('a'))
setA.add('b')
setA.add('c')
// setB.add('a')
// setB.add('b')
console.log('values', setA.values())
// console.log(setA.subset(setB))
