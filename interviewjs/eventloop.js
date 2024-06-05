const one = () => console.log("first");
const two = () => setTimeout(() => {
    console.log("second, this will execute at last because of event loop set eyes on task queue if someonething is in there , and it enter to call stack and executes");
}, 500);

const three = () => console.log("third");

two()
one()
three()