# JS Questions:

## Explain event delegation

## Explain how `this` works in JavaScript

* this is the set of key value pairs associated at the current lexical scope

## Explain how prototypal inheritance works

Creates a new object type in memory that assigns all current `this` values to
the new object.

```
function Shape() {...};
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
```

## Explain why the following doesn't work as an IIFE: `function foo(){ }();`.

* this is not an immediately invoked function due to it being a function
  defined:
* foo is defined as a function definition, nothing more
* then the () is interpreted as a parse error due to nothing being called
* fix his by using `(function foo(){}());`

## What's the difference between a variable that is: `null`, `undefined` or undeclared?

* `null`: variable has not been declared
* `undefined`: has space allocated in memory, but has not been set yet

## How would you go about checking for any of these states?

* check if null: variable === null
* check if undefined: variable == undefined
* ReferenceError will be thrown which is a good thing

## What is a closure, and how/why would you use one?

* closure is a function that has access to its own lexical scope when executed
  outside of its scope

## Can you describe the main difference between a `forEach` loop and a `.map()` loop and why you would pick one versus the other?

## What's a typical use case for anonymous functions?

* anonymous functions are used if it is not called anywhere else, when inline
  functions are needed

## What's the difference between host objects and native objects?

## Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?

## What's the difference between `.call` and `.apply`?

* call takes an object as an argument to add to .this while apply takes an array

## Explain `Function.prototype.bind`.

* bind takes a given object and applies it to a called function as it's lexical
  `this`

## What's the difference between feature detection, feature inference, and using the UA string?

## Explain Ajax in as much detail as possible.

## What are the advantages and disadvantages of using Ajax?

## Explain how JSONP works (and how it's not really Ajax).

## Explain "hoisting".

## Describe event bubbling.

## What's the difference between an "attribute" and a "property"?

## Why is extending built-in JavaScript objects not a good idea?

## Difference between document load event and document DOMContentLoaded event?

## What is the difference between `==` and `===`?

* `==` is are the two evaluted to equal, 1 == '1' through coersion but can be of
  different primative types = `===` requires both objects be the same primative

## Explain the same-origin policy with regards to JavaScript.

## Why is it called a Ternary operator, what does the word "Ternary" indicate?

* short hand for if statment to set or return a value, ie. `const x = var === 1
  ? var : 2;`

## What is `"use strict";`? what are the advantages and disadvantages to using it?

## Why would you use something like the `load` event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?

## Explain what a single page app is and how to make one SEO-friendly.

## What is the extent of your experience with Promises and/or their polyfills?

## What are the pros and cons of using Promises instead of callbacks?

## What tools and techniques do you use debugging JavaScript code?

* standard library debugger
* chrome or firefox dev tools, performance tools

## What language constructions do you use for iterating over object properties and array items?

## Explain the difference between mutable and immutable objects.

* mutable can update and change after instantaion
* immutable cannot be updated

## What is an example of an immutable object in JavaScript?

* strings are immutable

## How can you achieve immutability in your own code?

* when creating objects, sicne they are passed by references it is important to
  use `const` and object spread to create a new object before manipulating it

## Explain the difference between synchronous and asynchronous functions.

## What is event loop?

## What is the difference between call stack and task queue?

## Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`

* `function foo() {}` is function name
* `var foo = function() {}` is anonymous function assigned to variable

## What are the differences between variables created using `let`, `var` or `const`?

* `let` is current function scoped, can be overwritten, not instantated until
  JIT compiler reaches line
* `var` defined and hoisted and can be changed at any time, still function
  scoped
* `const` cannot be updated once created, is hoisted at compile time

## What are the differences between ES6 class and ES5 function constructors?

## Can you offer a use case for the new arrow `=>` function syntax? How does this new syntax differ from other functions?

## What advantage is there for using the arrow syntax for a method in a constructor?

* automatically bind `this`

## What is the definition of a higher-order function?

## Can you give an example for destructuring an object or an array?

* when passing props in a react component -> `const { x, y } = this.props;`

## ES6 Template Literals offer a lot of flexibility in generating strings, can you give an example?

* `` const cat = `${type}`; ``

## Can you give an example of a curry function and why this syntax offers an advantage?

## What are the benefits of using `spread syntax` and how is it different from `rest syntax`?

## Why you might want to create static class members?
