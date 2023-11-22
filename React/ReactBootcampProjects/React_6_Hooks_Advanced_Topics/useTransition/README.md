### useTransition

is a React Hook that lets you update the state without blocking the UI.
useTransition let us to turn some actions as less urgent 


### Suspense API

The Suspense API is a feature in React that allows you to manage the loading state of your components.
It provides a way to "suspend" rendering of a component until some data has been fetched, and display a fallback UI in the meantime.
This make it easier to handle asynchronous data loading and provide a smooth user experience in your React Application.

If some resources used less often than the other ones, does not make sense to jump all of that code when we initially ship our application to the browser
Because keep in mind, the more code we send the more time it will take for the browser to compile it, which in turn will affect how fast the user can interact with our 
application. In order to lazy load our components or progrssively load our application, we will use a tool called Suspense.

Instead of importing everything in our initial render which of course is going to add the loading time, we only want to import 
that slow component when actually the user want to work with it.

Suspense work at the same time with lazy 