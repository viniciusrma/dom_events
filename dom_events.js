/* 
Event Handler Registration

JavaScript interprets registered events as event objects with properties and methods. 
When you create an event handler function on a specific event, you create a property of the event object.

An event handler function is registered as a property attached to the DOM element being interacted with
, or the event target. 
Check out the syntax:
*/

let eventTarget = document.getElementById('targetElement');

eventTarget.onclick = function() {
  
}

/*
First, we accessed the DOM element that serves as the event target by its ID using document.getElementById('targetElement').
Then we created the event handler property (eventTarget.onclick).
Event handlers consists of the event target followed by the event name (the prefix on- and the event type.) 
*/

/*
Adding Event Handlers

.addEventListener() - An event listener waits for a specific event to occur and calls a named event handler function to respond to it. 
This method requires two arguments: 1 The event type as a string, 2 The event handler function.
*/


let eventHandlerFunction = function() {
    
}
  
eventTarget.onclick = eventHandlerFunction;

eventTarget.addEventListener('click', eventHandlerFunction); //listener method

/*
Removing Event Handlers

The .removeEventListener() method is used to reverse the .addEventListener() method. 
This method stops the code from “listening” for an event to fire when it no longer needs to. 
.removeEventListener also passes two arguments: 1 The event type as a string, 2 The event handler function.
*/

eventTarget.removeEventListener('click', eventHandlerFunction);

/*
Event Object Properties

*/