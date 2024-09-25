// Since JavaScript has dynamic array, we can use it to implement a stack.

class ArrStack {
  private stack: number[] = [];
  constructor() {
    this.stack = [];
  }

  getStackSize() {
    return this.stack.length;
  }

  isStackEmpty() {
    return this.stack.length === 0;
  }

  pushEle(num: number) {
    return this.stack.push(num);
  }

  popEle() {
    if (this.isStackEmpty()) {
      throw new Error("The stack is empty");
    }
    return this.stack.pop();
  }

  topEle() {
    if (this.isStackEmpty()) {
      throw new Error("The stack is empty");
    }
    return this.stack[this.stack.length - 1];
  }

  returnArr() {
    return this.stack;
  }
}

const newStack = new ArrStack();

newStack.pushEle(1);
newStack.pushEle(3);
newStack.pushEle(7);

const getNewStackTopEle = newStack.topEle();
const newStackSize = newStack.getStackSize();
const isNewStackEmpty = newStack.isStackEmpty();

console.log("newStack arr", newStack.returnArr());
console.log("getNewStackTopEle", getNewStackTopEle);
console.log("newStackSize", newStackSize);
console.log("isNewStackEmpty", isNewStackEmpty);
