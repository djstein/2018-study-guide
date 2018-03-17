# HTML Questions:

## What does a `doctype` do?

* "<!DOCTYPE html>" is required for all documents, ensures browser renders it as
  valid HTML specifications

## How do you serve a page with content in multiple languages?

* if all values are correctly done in variables say in React, and divided in
  presentational components, we simply create or use an existing translation
  library / provide our own translations that are set to the variables per
  language

## What are `data-` attributes good for?

* allow us to define / store extra information on the dom element, we can then
  access them in JavaScript or CSS

```
const nav = document.getElementById("nav");
nav.dataset.foo; // bar
```

```nav {
  color: attr(data-foo);
}
```

## Describe the difference between a `cookie`, `sessionStorage` and `localStorage`.

* cookie: browser may store data and also attach it to the requests / responses
  back to server. can have session or experation.
* localStorage: no exiration data, is a key value pair database. per domain
  isolation
* sessionStorage: same function as localStorage, only is dropped when session is
  closed

## Describe the difference between `<script>`, `<script async>` and `<script defer>`.

* script: embed or reference excutable code, this code executes immediately upon
  download completion. can happen before page is parsed
* script async: execute asynchronously, load from other domain and excute so
  other processes are not blocked
* script defer: executes after fetching, after other exection, after document
  has been parsed, but before the DOMContentLoaded

## Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?

* CSS is fetched before DOM Tree is parsed, therefor speeding up what the user
  sees
* JS is placed at the bottom of the body such that post parsing the JS can be
  loaded and executed.
* We aim to have JS loaded and executed by the time the DOM + CSSOM have been
  rendered

## What is progressive rendering?

## Why you would use a `srcset` attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.

* srcset: defines a set of images that browser chooses based on width of screen
* use browser over JS / CSS because it downloads images before main parser has
  started to interpret CSS/JS. Much faster to load smaller image than large then
  determine size, then get small.

## Have you used different HTML templating languages before?

* yes, use Handlebars, Jinja, Django Templating language, among others in server
  side rendering to achieve HTML output that has variables or portions added
  programatically
