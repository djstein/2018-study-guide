# Network Questions:

## Traditionally, why has it been better to serve site assets from multiple domains?

- we can share assets between production, staging, beta, etc environments
- we can push changes to assets without deploying system
- since assets are typically non changing and requested often we can use high amounts of caching (making use of cdn, network, or system caches) thus reducing round trip time to users
- remove calls from servers that require CPU for processing data

## Do your best to describe the process from the time you type in a website's URL to it finishing loading on your screen.

- URL typed into browser, browser checks caches for values associated for that URL
- checks tier 2 domain, then tier 1 domain to check that IP Address is assocaited to URL
- returns with OK and server begins processing request
- request goes through middleware, routing, and finally to view code
- session is created with the IP Address and a response is sent back (wither a 2XX, 3XX, 4XX, or 5XX if it was not processed)
- HTML or JSON is served to client regardless of response code
- if HTTP/2, multiplexing will be used to retrieve more than one object if 1> exisits in the HTML
- ensuring all assets are retrieved from server or CDN, the page will process any JS
- then create DOM and CSSOM trees, determing layout, painting, and compisiting

## What are the differences between Long-Polling, Websockets and Server-Sent Events?

- Long-Polling
- Websockets
- Server-Sent Events

## Explain the following request and response headers:

  * Diff. between Expires, Date, Age and If-Modified-...

  * Do Not Track

  * Cache-Control

  * Transfer-Encoding

  * ETag

  * X-Frame-Options
  
## What are HTTP methods? List all HTTP methods that you know, and explain them.
