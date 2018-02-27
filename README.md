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

* Lexical Scope
* Closures

### Hosting, Function & Block Scoping and Function Expressions & Declarations

### Binding (call, bind, apply, and lexical this)

### Object prototypes, constructors and mixins

### Composition and high order funcitons

### Event delegatoin and bubbling

### Type Coercion using typeof, instanceof and Object.proptype.toString

### Asynchronous calls with callbacks, promises, await and async

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
