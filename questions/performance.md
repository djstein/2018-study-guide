# Performance Questions:

## What tools would you use to find a performance bug in your code?

* for vanilla JS, DOM, or CSSOM rendering we can use the Firefox Development
  Performance tools
* Flame Chart: JavaScript call stack over course
* Call Time: shows JavaScript functions in which browser spent most of time
* Waterfall: shows different operations the browser was performing (layout, JS,
  repaints, garbage, etc)

## What are some ways you may improve your website's scrolling performance?

-

## Explain the difference between layout, painting and compositing.

* Layout: calculate space for object based on rules (very invovled)
* Paint: filling in pixels, draw multiple layers to form visuals
* Compositing: draw the layers in correct order (correct overlapping, etc)
