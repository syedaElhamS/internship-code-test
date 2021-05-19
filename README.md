# Emigreat Summer internship code test

Thanks for showing an interest in the Emigreat summer internship program!  In order to submit your code test, please fork this repository and send us a link to your solution together with your cover letter when you respond to the internship advertisement.

## Javascript question: event loop

### Question

In what order will the following numbers be logged, and why?

```
console.log(1)
setTimeout(() ⇒ console.log(2), 5000)
setTimeout(() ⇒ console.log(3))
Promise.resolve(4).then(console.log)
console.log(5)
```

### Answer
// Your answer goes here.
1
5
4
3
2
The reason is when line 2, 3 is executed,  the callstack pushes the setTimeout() to web API during runtime and webAPI wait 5 and 0 seconds respectively for line 2 and 3 to push the callback functions to the event queue. When the current stack is empty, the event loop then pushes these callbacks to the stack.  3 is printed before 2 as there was a waiting period of 5 seconds for the console.log(2) in line 2. Hence the callback printing 3 is entered first in callback queue and goes to the stack first and then prints 3. After that callback printing 2 enters the stack and prints 2.
In case of lines 1, 5 console.log is in the the WebAPI and directly called without going for an event loop to execute. 
For line 4 ‘Promise then’ is a microtask and therefore 4 is printed after the tasks (lines 1,5) and before setTimeouts (as setTimeouts create macrotasks and microtasks are executed before macro tasks )


## Javascript test: arrays

Write a function that accepts an array of strings. Return the longest string in the array.

### Solution
Provide the solution in the given file: [longestString.js](https://github.com/emigreat-dev/internship-code-test/blob/main/longestString.js)

## CSS test: [https://cssbattle.dev/](https://cssbattle.dev/)
Pick any css battle where the solution requires at least three html elements (or one html element + pseudo elements, e.g. 'before' and 'after').

Submit the resulting css together with a link to the battle you chose.

### Solution
Provide your solution in the given file: [cssBattle.css](https://github.com/emigreat-dev/internship-code-test/blob/main/cssBattle.css)

## Personal project

Provide a link to a personal project that you're proud of and happy to share with us. It can be anything from a component to a system.

### Link to project
// Your link goes here.
