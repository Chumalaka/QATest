# ProdQA-NodeTest
a test project to demonstrate compentency with our chosen stack

## Pre-requisites:
* Front End Javascript
  * Ability to complete any exercise from https://www.freecodecamp.com/map 's 
    * HTML5 and CSS
    * Basic JavaScript
    * Object Oriented and Functional Programming
    * JSON APIs and Ajax
* Strong grasp of HTTP response codes (200, 301, 404, 502) 
* Experience with Node.js
  * Ability to complete any exercise from [learnyounode](https://github.com/workshopper/learnyounode)

## Test
Designed to match typical tasks for a Production QA Developer.

Fork or download the zip of this GitHub repository to your computer (do not clone it). Complete each exercise in a separate folder, with any source code or notes you needed to complete it. Make frequent commits while you work on your solutions. Push/Upload your solutions to a public GitHub repository under your name. We want to see many commits for each file.

It's better to write good code than to finish everything. That being said, try to complete at least half of the following exercises.

### Use client side Fetch to download and display data
1. In https://jsbin.com or another editor, use [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to download some text from https://httpbin.org/html . 
1. Display this text on a webpage within a div.

Shows ability to get data using Promises and display it on the front end from an API.

### Manipulate Data
1. Continue from Part 1 code
1. Instead display every odd word from the text in part 1. For example if the sentence was "Mary has a little lamb" display "Mary a lamb".

Shows ability to chain functional javascript operations, filter data, and manipulate objects.

### Fix a few bugs
Make the code pass the test 
#### 1. Index issue
[Codewars version](https://www.codewars.com/kata/grasshopper-summation/train/javascript)
"
> Write a program that finds the summation of every number between 1 and num. The number will always be a positive integer greater than 0.
> 
> For example:
> 
> summation(2) = 3
> 
> 1 + 2
> 
> summation(8) = 36
> 
> 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

"
Code to fix:
```javascript
var summation = function (num) {
  var y = 0;
  for(var i = 0; i<num; i++){
    y = y+i;
  }
  return y;
}
```
Mocha test to pass:
```javascript
describe('summation', function () {
  it('should return the correct total', function () {
    Test.assertEquals(summation(1), 1)
    Test.assertEquals(summation(8), 36)
  })
})
```

#### CSS issues:

Either:

##### A. Go to [flexboxfroggy](http://flexboxfroggy.com/) and complete level 7 and level 10. Put your solution code into a file. (No need to complete the other exercises, though they may help you understand how to use the CSS feature.)

##### B. Go to [this buggy css page](https://mdn.github.io/learning-area/css/introduction-to-css/debugging-css/) and take full screen screenshots of each individual fix for each of these issues:
1. The `<header>` and `<footer>` elements are supposed have a background color, but no color appears.
1. The `<h1>` and the `<p>` inside the footer are both too high up on the page — this is especially apparent on the `<h1>`, which is nearly off the screen! You could try clicking on the `<h1>` and unchecking the applied declarations to find out which one is causing the problem.
1. The `<img>` is supposed to be floated down and to the right so it sits to the right of some of the text, but it isn't — it's directly above all of the text.
1. The text in the `<main>` content area is far too small — the paragraphs and list items should have a larger font-size applied to it, but it doesn't seem to have been applied to either. Hint: This one is a bit harder, as it is a problem with the selector rather than a property.  You may have to study the source code to find this — you can find it in the Style Editor in Firefox's developer tools.

Shows debugging ability, and TDD ability

### Understand existing code
1. Use the web app [here](https://output.jsbin.com/zobogoj/latest) a bit (10 min max), and play with it.
1. Go to [this](https://jsbin.com/zobogoj/latest/edit?js,output) jsbin, and read the code for the web app.
1. Ask the tester (me) to come over. As you read the code, verbalize what you think each section of code is doing.
1. Run the source through a debugger (such as Chrome Dev Tools) and set a breakpoint on the createToDoElem function. Explain each step as it runs until a todo task is displayed on the screen.

Shows the ability to reason about existing code

### Extend existing code
Improve / Extend the code from part 3 with two features from the following list. Be creative, and put your own spin on the implementation:

* Add a date to each todo list task
* Improve the CSS according to your taste
* Improve the architecture of the todo task data structure
* Add a button to filter the tasks by some criteria

Shows the ability to improve existing code

### Teach us something you are experienced with
Choose a topic you are experienced with, and teach us about it. Choose something small enough to fit in 5-10 minutes. 
For example:

* if you love jQuery or another client side library, teach us about a particular feature it has that makes it worth while to use.
* if you have a favorite database, teach us how to insert a record from Node.js code
* if you are wrote any open source software, teach us how a particular part of it works

Shows the ability to communicate clearly, humbly, and to teach others

### Logic / Algorithm Question
a variation on FizzBuzz from [Codewars](http://www.codewars.com/kata/51dda84f91f5b5608b0004cc/train/javascript)
"
> Write a function that takes an integer and returns an Array [A, B, C] where A is the number of multiples of 3 (but not 5) less than the given integer, B is the number of multiples of 5 (but not 3) less than the given integer and C is the number of multiples of 3 and 5 less than the given integer.
> 
> For example, solution(20) should return [5, 2, 1]
"

Shows the ability to reason about tricky issues.
