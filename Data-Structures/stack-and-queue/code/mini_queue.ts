class NormalQueue {
  private nums: number[];
  private front: number;
  private rear: number;
  private capacity: number;

  constructor(capacity: number) {
    // capacity of array is based on the number of capacity
    this.nums = new Array(capacity);
    // -1 means currently, there's no element at the moment
    this.front = -1;
    this.rear = -1;
    this.capacity = capacity;
  }

  // push to the queue
  enqueue(num: number) {
    // Check if the queue is full
    if (this.rear === this.capacity - 1) {
      throw new Error("The queue is full");
    }
    // if queue is not full, change value of front from -1 to index 0 and front is always be 0
    if (this.front === -1) {
      this.front = 0;
      console.log("front after enqueue", this.front);
    }
    // rear will be incremented as it is the last index
    this.rear++;
    console.log("rear after enqueue", this.rear);
    this.nums[this.rear] = num;
    console.log("num after enqueue", num);
  }

  // remove from the queue
  dequeue() {
    // Check if the queue is empty
    if (this.front === -1 || this.front > this.rear) {
      return undefined;
    }
    const num = this.nums[this.front];
    console.log("num after dequeue", num);
    this.front++;
    console.log("front after dequeue", this.front);

    // console.log("Is front > rear", this.front > this.rear);
    if (this.front > this.rear) {
      this.front = this.rear = -1;
    }

    return num;
  }

  isQueueEmpty() {
    return this.front === -1;
  }
}

const queue_1 = new NormalQueue(4);

queue_1.enqueue(2);
// console.log(queue_1);

/**
 *
 * RESULT after pushing 2 into queue
 *  
front 0
rear 0
num 2
NormalQueue {
  nums: [ 2, <3 empty items> ],
  front: 0,
  rear: 0,
  capacity: 4
}
 */

queue_1.enqueue(5);
// console.log(queue_1);

/**
 * 
 * RESULT after pushing 5 into queue
 *
front:0
rear:1
num:5
NormalQueue {
  nums: [ 2, 5, <2 empty items> ],
  front: 0,
  rear: 1,
  capacity: 4
}
 */

queue_1.enqueue(7);

/**
 * 
 * RESULT after pushing 7 into queue
 *
front:0
rear:2
num:7
NormalQueue {
  nums: [ 2, 5, 7,  <1 empty items> ],
  front: 0,
  rear: 2,
  capacity: 4
}
 */

queue_1.enqueue(9);

/**
 * 
 * RESULT after pushing 9 into queue
 *
front:0
rear:3
num:9
NormalQueue {
  nums: [ 2, 5, 7, 9 ],
  front: 0,
  rear: 3,
  capacity:4
}
 */

// console.log(queue_1);

/**
 *   
 throw new Error("The queue is full");
            ^
Error: The queue is full
 */

queue_1.dequeue(); // front = 1
queue_1.dequeue(); // front = 2
queue_1.dequeue(); // front = 3
queue_1.dequeue(); // front = 4 => In this stage, reset front and rear as -1 => queue is empty

console.log(queue_1.isQueueEmpty()); // true
