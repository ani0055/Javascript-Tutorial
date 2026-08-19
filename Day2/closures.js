// A function bind together with its lexical scope is a Closures

// A closure is a function bundled together with references to its surrounding state, or lexical environment, 
// allowing an inner function to access variables from its outer scope even after the outer function has finished executing.

// We can pass a function as a parameter/argument inside another function, we can assign a variable with a function
// also we can return the functions from function

function x(){
    var a = 7;
    function y(){
        console.log(a);
    }

    return y; //not only the function but also its clouser was returned
}

var z = x();
console.log(z);

z(); // functions when returned from the function it maintains its lexical scope

// Uses of Clousers 
/*
-> Module Design patterns
-> Currying
-> Functions like once
-> memoize
-> maintaning state in async world
-> setTimeouts
-> Iterators
-> etc.
*/