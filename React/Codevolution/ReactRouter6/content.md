### What is React Router?

It is a fully-featured client and server-side routing library for React

Helps create and navigate between different URLs that make your web application 

Provides unique URLs for different components in the app and makes the UI easily shareable with other users.

### Course Content 

Configuring routes
Navigating on button click
Navigating programmatically
Dyamic routes
Nested Routes
Route Parameters
Lazy Loading
Authentication
And a lot more

### Notes 

- on absolute paths begin with /
- NavLink which knows whether or not it is the active link 
  by default it receives an active class when the link is the current route
- in order to go back to the browser we use navigate(-1) means a change in history stack 
- if i add navigate('order-summary', {replace: true}) ---> we go back on history stack, replace the history add optional second argument 
- outlet component renders the component corresponsing to the matching child route from the parent list of routes
- useSearchParams instead of storing state in memory though it is stored in the url