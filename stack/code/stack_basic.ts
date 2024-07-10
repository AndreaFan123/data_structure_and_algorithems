const stack: number[] = [];
// This can be any type, string[], boolean[]...

// Start pushing some numbers

stack.push(1);
stack.push(3);
stack.push(7);

// Peeking elements
const peek = stack[stack.length - 1];

// Check size
const stackSize = stack.length;

// Check if stack is empty
const isStackEmpty = stackSize === 0;

console.log("stack", stack);
console.log("peek", peek);
console.log("stackSize", stackSize);
console.log("isStackEmpty", isStackEmpty);
