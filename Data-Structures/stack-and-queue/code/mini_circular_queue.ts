class CircularQueue {
  private nums: number[];
  private front: number;
  private queueSize: number;

  constructor(capacity: number) {
    this.nums = new Array(capacity);
    this.front = this.queueSize = 0;
  }

  // Get length of the queue
  get capacity() {
    return this.nums.length;
  }

  // Get size of the queue
  get size() {
    return this.queueSize;
  }

  // Check if queue is empty
  isQueueEmpty() {
    return this.queueSize === 0;
  }

  // Access the first element
  peek() {
    if (this.isQueueEmpty()) throw new Error("Queue is empty");
    return this.nums[this.front];
  }

  // enqueue
  push(num: number) {
    // Check if queue is empty
    if (this.queueSize === this.capacity) {
      console.log("Queue is fulled");
      return;
    }
    const rear = (this.front + this.queueSize) % this.capacity;
    this.nums[rear] = num;
    this.queueSize++;

    console.log("capacity", this.capacity);
    console.log("push front", this.front);
    console.log("push rear", rear);
    console.log("push num", num);
    console.log("push queue size", this.queueSize);
  }

  // dequeue
  pop() {
    // get the first element
    const num = this.peek();
    // front moves to next position (+1) when removing element
    this.front = (this.front + 1) % this.capacity;
    // Reduce size
    this.queueSize--;

    console.log("pop num", num);
    console.log("pop front", this.front);
    console.log("pop queue size", this.queueSize);
    return num;
  }

  toArr() {
    const arr = new Array(this.size);
    for (let i = 0, j = this.front; i < this.size; i++, j++) {
      arr[i] = this.nums[j % this.capacity];
    }
    return arr;
  }
}

const new_queue = new CircularQueue(4);

new_queue.push(2);

/**
 * capacity = 4
 * front = 0
 * queueSize = 0
 * rear = (0 + 0) % 4 = 0
 * nums[0] = 2
 * [2]
 */

new_queue.push(5);

/**
 * capacity = 4
 * front = 0
 * queueSize = 1
 * rear = (0+1) % 4 = 1
 * nums[1] = 5
 * [2, 5]
 */

new_queue.push(7);
/**
 * capacity = 4
 * front = 0
 * queueSize = 2
 * rear = (0 + 2) % 4 = 2
 * nums[1] = 5
 * [2, 5, 7]
 */

new_queue.push(8);

/**
 * capacity = 4
 * front = 0
 * queueSize = 3
 * rear = (0 + 3) % 4 = 3
 * nums[1] = 5
 * [2, 5, 7, 8]
 */

new_queue.pop();
/**
 * pop num 2
 * pop front 1
 * pop queue size 3
 * CircularQueue { nums: [ 2, 5, 7, 8 ], queueSize: 3, front: 1 }
 */

new_queue.pop();

/**
 * pop num 5
 * pop front 2
 * pop queue size 2
 * CircularQueue { nums: [ 2, 5, 7, 8 ], queueSize: 2, front: 2 }
 */

new_queue.toArr();

console.log(new_queue.toArr());

/**
 * [7,8]
 */
