// const one = () => console.log("first");
// const two = () => setTimeout(() => {
//     console.log("second, this will execute at last because of event loop set eyes on task queue if someonething is in there , and it enter to call stack and executes");
// }, 500);

// const three = () => console.log("third");

// two()
// one()
// three()

(function() {
    // Private variables and functions
    const name = 'John';
    function sayHello() {
      console.log('Hello, ' + name + '!');
    }
  
    function greet() {
      console.log('Hello, world!');
    }
    sayHello()
    greet()
  })();