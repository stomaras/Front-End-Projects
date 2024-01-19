### Tanstack Query can simplify your life as developer
install it 

npm install @tanstack/react-query

Tanstack Query does not send http requests
At least not on its own you have to write the code that sends the actual http requests

Tanstack Query then manages the data, errors, caching & much more.

caches response data 

gcTime: define how long the data in the cache will be kept default is 5 minutes

isLoading: will not be true if a query is just disabled

useMutation does not send immediately a request when a component is render but only when you tell it 
to send that request , which you do with the help of mutate function
isPending from useMutation will be true if request is on the way or false otherwise

every time i rerender a component react-query executed behind the scenes 

onMutate will execute before this process is done and before you get back a response