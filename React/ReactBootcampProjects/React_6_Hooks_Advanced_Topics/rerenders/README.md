### React.memo()

React.memo(component) = returns memoized component
component checked if props have changed


### UseCallback 

The useCallback hook is a hook in React that allows you to memoize a function. It takes two arguments
the first is the function you want to memoize, and the second is an array of dependencies. The hook will 
return a memoized viersion of the function that only changes if one of the values in the dependency array changes.


### useMemo

The useMemo hook is a hook in React that allows you to 
memoize a value. the first is a function that returns the value you want to memoize, and the 
second is an array of dependencies. The hook will return the memoized value that will only change if one fo the 
values in the dependency array changes.