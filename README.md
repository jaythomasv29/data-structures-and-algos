1. What is the difference between var, const, let
* Var is in the `function` scope
* Variables declared with var keyword are hoisted (initialized with undefined before the code is run) which means they are accessible in their enclosing scope even before they are declared:
```
function run() {
  console.log(foo); // undefined
  var foo = "Foo";
  console.log(foo); // Foo
}
run();
```

* Let & Const are `block {}` scope
---
2. Let vs Const
* Let can be reassigned values
* Const can only be assigned once, but can add,remove,change, and modify values in Arrays and Objects
---

3. What is the difference between `==` and `===`?
* These comparison operators vary between checking the value, while another checks `value && type`
---
4. Null vs Undefined
* They both represent empty values, but a user does not generally assign an undefined value
* Null is an object, and it is usually assigned by someone.
---
5. `this` keyword in regular functions vs arrow functions

* In a regular function, `this` keyword is dynamic and depends on its context
* In an arrow function, it always refers to its outer lexical scope
---
6. What is prototypical inheritance?
* Every object has a property called prototype, and when you create a new object from these objects, it will inherit properties from its parent.
* Each and every JavaScript function will have a prototype property which is of the object type. You can define your own properties under prototype . When you will use the function as a constructor function, all the instances of it will inherit properties from the prototype object.

```
let car = function(model) {this.model = model}
toyota = new car('toyota')
car.prototype.getModel = function() {return this.model}
toyota.getModel()
```
---
7. Function declaration vs function expression
```
console.log(funcA())  // Works
console.log(funcB())  // Reference error, not defined
function funcA() {
  console.log('function declaration')
}

let funcB = function() {
  console.log('function expression)
}
```
* `Function declaration` is hoisted and moved to the top of their scope before execution
* `Function expression` behaves like a variable and won't be available until defined, but can be passed to another function

