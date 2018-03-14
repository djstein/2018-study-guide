# Study Guide

## JavaScript

### Primitive Data Types

* Boolean type: logical entity that can have two values: `true` or `false`
* Null type: reference that points to a nonexisitng or invalid object, can be
  `null`
* Undefined type: variable that has not been assigned a value is given
  `undefined`
* Number type: double precision 64-bit floating point format. between -(2^53-1)
  and 2^53-1. Apart from number type, it can also be `+Infinity`, `-Infinity`,
  or `NaN` (not a number).
* String type: represent texual data. Set of 16-bit unsigned integer values.
  Each value represents an index value. JS strings are immutable.
* Symbol type: introduced in ES6, is a unique and immutable primitive value that
  may be used as the key of an Object property.

### Primitive Data Structures

* Objects: collection of properties. A limited set of properties are
  initialized, properties can then be added or removed. Properties can be of any
  type, including other objects. Properties act in key values, with the keys
  being of either type String or Symbol.
* "Normal" Objects: a mapping between keys and values. Keys are strings (or
  Symbols) and values can be any other JS data type/structure. This makes
  objects a natural fit for hashmaps.
* Functions: functions are objects with the additional capability of being
  callable
* Dates: built in JavaScript date utility Date. If no arguments passed, creates
  a new Date object with current date and time. Used as a uniform object for
  determing time.
* Arrays: regular obejcts in which there is a particular relatoinshiop between
  integer-key-ed properties and the length property. Inherits from
  `Array.prototype`. Represent lists or sets.
* Typed Arrays: introduced in ES6, present an array-like view of underlying
  binrary data buffer. Have many C equivalents.
* Maps: ES6, like an object, but keys can be of function, object, or any
  primitive over a `String` or `Symbol`. Size of a Map can be easily determined
  with `.size` . Can be directly iterated. USED for frequent addition / removal
  of key pairs
* Sets: ES6, interger key based object that returns a set (only one of each
  unique object inside of the data structure)
* WeakMaps: ES6, same as Map BUT can only be OBJECTS only, no arbitrary value of
  any type
* WeakSets: ES6, same as Set BUT can only be OBJECTS only, no arbitrary value of
  any type
* JSON: JavaScript Object Notation. Universal data structure used to store /
  send data

While more objects exisit, they are out of scope for this guide.

Use `typeof` to determine type of a variable. `typeof x`

### Execution Context

#### Lexical Scope:
- Association of a name to an entity, such as a variable, and where that binding is valid, refered to as scope blocks.
- JavaScirpt uses a Left-Hand Side lookup for variables.
- Scope is defined on FUNCTION SCOPE. While it appears to be block scope form use of `{}` a new scope is only created when a new function is defined. Use ES6 `const`, `let`, and `strict` mode to mitigate this.

#### Hoisting: 
- During execution, every variable or function gets added to the relative scope
- Functions are added before variables.
- A function's only difference from variable hoisting is that it's contents is also added.
- In a block of code, a variable or function will continually be overriden by the compiler if more instances with the same declaration appear.
- HOWEVER, it is important to remember that variables declared with `let` will not be hoisted until execution.

#### Closure:
- function is able to rememebr and access its lexical scope even when the function is executing outside its lexical scope.
- a special kind of object that combines two things: a function, and the environment in which that function was created. The environment consists of any local variables that were in-scope at the time that the closure was created.

```javascript
var bar = {
  val: 'test',
  info: function() {
    console.log(this.val)
    nested = function() {
      // val is not defined in this function scope
      console.log(this.val)
    }
    nested();
  }
};
bar.info()
// test
// undefined
```

- moving futher, we can define the function `info` to a variable to change it's this scope. It will also evaluate LHS
```javascript
...
var boo = bar.info;
boo()
// undefined
var val = 'wow';
boo()
// wow
```
* closures are best used when using nested functions with ability of `that = this`.

### Controlling `this`

#### lexical this
- This occurs when we assign this to a variable, typically named that. Thus making any instance of an outer functions `this` available in a child function.

```javascript
var bar = {
  val: 'test',
  info: function() {
    var that = this;
    console.log(this.val)
    nested = function() {
      // val is not defined in this function scope
      console.log(that.val)
    }
    nested();
  }
};
bar.info()
// test
// test
````

#### .call()
* Calls a function with a given `this` value and arguments provided individually
* You can write a method once and then inherit it in another object, without having to rewrite the method for the new object.
* best used when borrowing method from on object and use it in another.

Chain Constructors for an object
```javascript
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
```

Invoke function with context for `this`
```javascript
function greet() {
  var reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
  console.log(reply);
}

var obj = {
  animal: 'cats', sleepDuration: '12 and 16 hours'
};

greet.call(obj);  // cats typically sleep between 12 and 16 hours
```

#### .apply()

* Calls a function with a given `this` value, and `arguments` provided as an array.
* This syntax is almost identical to .call() with the difference being call() accepts an argument list while apply() accepts a single array of arguments

With Built in functions
```javascript
var numbers = [5, 6, 2, 3, 7];
var max = Math.max.apply(null, numbers);
// max -> 7
```
* best used when borrowing method from on object and use it in another. especially when values to use are in a constant array.

#### .bind()
* creates a new function that, when called, has its `this` keyword set to the provided value, followed by a set of arguments prepended to the bound function upon invokation.

```javascript
var module = {
  x: 42,
  getX: function() {
    return this.x;
  }
}

var retrieveX = module.getX;
console.log(retrieveX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = retrieveX.bind(module);
console.log(boundGetX());
// expected output: 42
```

### Object prototypes, constructors and mixins

#### Object.prototypes
- Nearly all obejcts in JS are instances of `Object`
- Changes to the `Object` protoype object are seen by ALL objects through prototype chaining unless the properties and methods are overwritten further in the chain
- the most important and non changing method is the `Object.prototype.constructor`, which specifies the function that creates an object's prototype

#### Constructors
- Prototypes are used to make constructors
```javascript
// Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}

// superclass method
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?',
  rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?',
  rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
```

#### Mixins
the process of decomposing an object(s) into a single object so that the final product has access to the deomposed keys value paris.
```javascript
const chocolate = {
  hasChocolate: () => true
};

const caramelSwirl = {
  hasCaramelSwirl: () => true
};

const pecans = {
  hasPecans: () => true
};

const iceCream = Object.assign({}, chocolate, caramelSwirl, pecans);

// or, if your environment supports object spread...
const iceCream = {...chocolate, ...caramelSwirl, ...pecans};

console.log(`
  hasChocolate: ${ iceCream.hasChocolate() }
  hasCaramelSwirl: ${ iceCream.hasCaramelSwirl() }
  hasPecans: ${ iceCream.hasPecans() }
`);

hasChocolate: true
hasCaramelSwirl: true
hasPecans: true
```

### Composition and high order funcitons
Composition is the process of combining two or more functions to produce a new function. They are evaluated from innermost variable and function to outter.

A high order function is one that can:
- take a function as an argument
- return a function as a result

```javascript
const twice = (f, v) => f(f(v));
const add3 = v => v + 3;

twice(add3, 7); // 13
```

### Event delegatoin and bubbling
Event Listener is something that waits for elements in the DOM to be interacted with.
Examples of events include: load, keydown, mouseover, mouseout, click, change, etc.
With vanillia JS:
```javascript
const handleSumbit = e => {...};
const button = document.getElementById('submit-button');
button.addEventListener('click', handleSumbit);
```
- event.target: identifies the HTML element on which an event occured
- event.currentTarget:  refers to the element to which the event listener has been attached

Event Bubbling:
- when an event is triggered it propigates through all parents until it is caught by an event handler
- event handlers defined on a parent will apply to child nodes, even those that are added to the DOM after the page loads

### Type Coercion using typeof, instanceof and Object.proptype.toString
- typeof: returns a string indicating the type of the operand.
```javascript
typeof null === 'object';
typeof true === 'boolean';
typeof 3.14 === 'number';
typeof NaN === 'number';
typeof Symbol() === 'symbol'
typeof {a: 1} === 'object';
typeof [1, 2, 4] === 'object'; // use Array.isArray or Object.prototype.toString.call to differentiate regular objects from arrays
typeof function() {} === 'function';
typeof class C {} === 'function';
typeof Math.sin === 'function';
typeof new Boolean(true) === 'object'; // Using the new operator results in an object.
```

- instanceof: tests whether the `proptype` property of a constructor appears anywhere in the prototype chain of an object.
```javascript
Syntax: object instanceof constructor
var simpleStr = 'This is a simple string'; 
var newStr    = new String('String created with constructor');
simpleStr instanceof String; // returns false, checks the prototype chain, finds undefined
newStr    instanceof String; // returns true
myString  instanceof Object; // returns true
```

- Object.proptype.toString: every object has a .toString() method that is called when the object is to be represented as a text value or when a String is expected. It can be overwritten to have a custom string valu.
- If not overwritten it will print "[object type]" where type is the object type.
```javascript
var o = new Object();
o.toString(); // return [object Object]
```

- Overwritting: new function will be called automatically or implicitly
```javascript
function Cat(x){this.x=x};
c = new Cat('meow');
Cat.prototype.toString = function makeNoise() {return this.x};
c.toString() // 'meow'
```

### Asynchronous calls with callbacks, promises, await and async

Callbacks
- Callbacks (standard def): a function passed into another function as an argument (aka composition)
- Callbacks (asynchronous): used to continue code execution after an asynchronous operation has completed.
- Since functions take time to complete, their return value (weither assigned to a variable or not) will be undefined until it completes.
- Asynchronous callbacks are achieved when a function is provided a function as its final argument. When the function completes with its normal arguments it will then call the second function with its own values.
*Function A with params X returns Y as argument for Function B.*
- Use modules to break apart callback functions. (another time http://callbackhell.com/)

Promises
- Promise: a proxy for a value not necessarily known when the promise is created.
- Lets asynchronous methods return values like synchronous methods, it is returning a promise that the value will be supplied in the future
Promises have three states:
1. pending: initial state, neither fulfilled nor rejected
2. fulfilled: meaning that the operation completed successfully
3. rejected: meaning that hte operation failed
if the Promise moves beyond pending, the then method is called.
```javascript
function test() {
  const p1 = new Promise((resolve, reject) => {
    if (x === 1) {
      resolve(y);
    } else {
      reject('x is not one');
    }
  }
  
  p1.then(val => {
    console.log('success: ', val);
  }).catch(reason => {
      console.log('error: ', reason);
  }
}
```

Await + Async
- Async Functions: declare a function as such, returning an AsyncFunction. 
- Await: operator used to wait for a Promise to move out of the pending state.

- When async functions are called, they return a Promise. When a value or exception is returned the Promise will be resolved with the returned value or thrown error.
- Async functions can contain await expressions that pauce the execution of the function until the Promise resolves, where it then resumes afterward.

```javascript
const resolveAfter = x => {
  return new Promise(resolve => {
    setTimeout(() => {
      resovle(x);
    }, 2000);
  });
}
const add = async (a) => {
  const b = await resolveAfter(20);
  const c = await resolveAfter(30);
  return a + b + c;
}
add(10).then(v => {console.log(v);}); // prints 60 after 4 seconds
```

Promise chain to async function:
```javascript
const getData = url => {
  return downloadData(url) // returns a promise
  .catch(e => {
    return downloadFallbackData(url); // returns a promise
  })
  .then(v => {
      return processDataInWorker(url); // returns a promise
  });
}
```

```javascript
const getData = async url => {
  let v;
  try {
    v = await downloadData(url);
  } catch(e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}
```
- Return statements of async functions are wrapped in Promise.resolve, thus no await is needed on the return line if it is a function or Promise variable.

### When to use fuction declarations and expressions

## React

### Container Component Model

### State

### Context

### High Order Components

### Render Props

### State Management with Redux

### Styling In React

## DOM

### Traversing the DOM

* Finding Nodes:
* Traversing Up and Down:
* Traversing Left and Right:
* Adding Node:
* Deleting Node:
* Copying Node:
* Performance:

## CSS

### Layout

### Responsive Design

### Adaptive Design

### Specificity

### Namespacing and Naming

## HTML

### Semantic Markup

### Tag Attributes

* Disabled
* Async
* Defer
* data-\*

## HTTP Protocol

## REST vs RPC

## 7 Layers of OSI Model

## System Design

### Rendering

* Client Side
* Server Side
* Universral Rendering

### Layout

### State Mangament

### Async Flow

### Seperation of Concerns

* Moderl View Controler
* Model View ViewModel
* Model View Presenter

### Multi Device Support

### Asset Delivery

## Web Performance

### Critical Rendering Path

### Service Workers

### Image Optimizations

### Lazy Loading and Bundle Splitting

### HTTP/2 and Server Push, Websockets

### Prefetch and Preload

### Browser Layout, Compositing, and Painting

## Security

### JSONP

### CORS

### CSRF

### iFrame Policies

## Time Complexities

### Big O

### Common Runtimes

* O(N)
* O(N Log N)

## Interview Questions

1. Build the layout for common web applications such as X
2. Implement widgets like a date picker, carousel, or e-commerce cart
3. Write a function for debounce
4. Write a function to clone an object deeply

notes:

* http://bigocheatsheet.com/
* http://davidshariff.com/blog/preparing-for-a-front-end-web-development-interview-in-2017/
* https://medium.com/javascript-scene/functional-mixins-composing-software-ffb66d5e731c
