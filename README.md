TimerJS
=========

TimerJS lets you give a timeout to your callback.

In some cases, a callback may be called only after inner callbacks resolutions, when you are using async.each() for instance.
I found it would be clever <strong>in some specific cases</strong> to be able to give a timeout to the inner callbacks in order to ensure your script will not run
"forever" if a inner callback takes too much time to be called.

TimerJS works in the browser and in NodeJS.

All you have to do is include the script, and then

````javascript
asyncFunction(arg, timer(callback, 100));
````
The callback will be called after 100 milliseconds, if it has not been called yet.

To use in browser environement 
````javascript
<script type='javascript' src='timerjs.js' />
````
In nodeJS 

Installation

````javascript
npm install timerjs
````

Then 
````javascript
var timer = require('timerjs');
````

### Usecases 
Obviously, timerJS should not be used if the data returned by your callback is very important. You should use it when
the lack of the data doesn't affect the global behaviour of your script.
