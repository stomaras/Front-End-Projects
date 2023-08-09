### What is JS Engine?

Program that executes JS Code
Example: V8 Engine

JS Engine contains
- CALL STACK -- where our code is executed (execution context) 
- HEAP -- where objects are stored , Object in memory

JS work with interpretation line by line and executes.

JUST In Time compilation: Entire code is converted into machine code at once, then executed immediately

JS Engine Steps 
- Parsing
- Compilation (Just-in-time compilation)
- Execution (Happens in Call Stack)
- Optimization during execution

JS Runtime in the browser

JS Engine
- Heap
- Call Stack

WEB APIs (Functionalities provided to the engine, accessible on window object)
- DOM
- Timers
- Fetch API

CALLBACK QUEUE
- onClick, example callback function from DOM event listener passed into stack with the help of event loop
- timer
- data

EVENT LOOP (For non-blocking concurreny model)

JS can exist outside of browsers for example nodejs