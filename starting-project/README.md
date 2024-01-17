### Tanstack Query can simplify your life as developer
install it 

npm install @tanstack/react-query

Tanstack Query does not send http requests
At least not on its own you have to write the code that sends the actual http requests

Tanstack Query then manages the data, errors, caching & much more.

caches response data 

gcTime: define how long the data in the cache will be kept default is 5 minutes

isLoading: will not be true if a query is just disabled