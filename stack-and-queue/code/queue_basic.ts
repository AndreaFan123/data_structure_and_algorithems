const queue: number[] = [];

// Start adding some numbers

queue.push(1);
queue.push(3);
queue.push(7);

// Dequeue elements
const firstElement = queue.shift();

// Peeking elements
const peek = queue[0];

// Check size
const queueSize = queue.length;

// Check if queue is empty
const isQueueEmpty = queueSize === 0;

console.log("queue", queue);
console.log("firstElement", firstElement);
console.log("peek", peek);
console.log("queueSize", queueSize);
console.log("isQueueEmpty", isQueueEmpty);
