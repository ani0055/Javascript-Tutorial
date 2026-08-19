// A function passed into another function is a callback function
// A callback function is a function that is passed as an argument to another function and executed later.

setTimeout(function (){
    console.log('timer');
}, 3000);

function x(y){
    console.log('function x');
    y();
}

x(function y(){
    console.log('callback function y');
})

// Blocking the main thread means when we have a function/operation which needs alot of time to execute it is called as blocker

function attachEventListener(){
    let count = 0;
    document.getElementById("clickMe")
    .addEventListener("click", function xyz(){
        console.log('Buttom Clicked ' + ++count);
    });
}

attachEventListener()
