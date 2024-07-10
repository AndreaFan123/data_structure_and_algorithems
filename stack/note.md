# Stack & Queue

## Stack

Stack is a linear data structure that follows the **LIFO** (Last In First Out) principle. The last element added to the stack will be the first element to be removed.

### Life Analogy

- A pile of books

You are a book lover, and enjoy buying books, but you don't have enough space in your book shelf, one day, you decide to stack the books on top of each other, but the one you want to read is the one you put on bottom, so you have to remove all the books on top to get the one you want.

![book-1](./book-1.png)

So you begin to move the books one by one until you get the one you want.

Stack data structure is like this, the last book you add to the stack will be the first book you remove.

![book-2](./book-2.png)

### Stack Data Structure in software development

- Browser History Navigation
- Undo operation in text editors

### Stack Operations

- **Push**: Add an element to the top of the stack
- **Pop**: Remove an element from the top of the stack
- **Peek**: Get the top element of the stack without removing it 👀

### Browser History Navigation

When visit a website, every page we visit is added to the stack.

![browser-1](./browser-1.png)

When we click the back button, essentially we are popping the last page we visited and go back to the previous page.

![browser-2](./browser-2.png)

### Basic Implementation

In JS or TS, there no built-in stack data structure, but we can use an array or linked list to simulate a stack.

```typescript
// Use array to create stack

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
```

![result](./result.png)

### LeetCode: Valid Parentheses

According to this task, we need to implement a function that accept a string as input, and return a boolean value to indicate whether the input string is valid parentheses.

In this task, let's go through the idea of using stack to solve this problem.

#### What makes a valid parentheses?

It will look like `()` or `[]` or `{}` or a combination of them, like `([])` or `{()}`, even nested like `({[]})`.

Try to look the pattern, we can identify that a valid parentheses needs to have a opening bracket followed by a closing bracket, the left one is always the opening bracket (`(`), and the right one is always the closing bracket(`)`).

#### Why use stack?

Stack is a LIFO data structure, we can push and pop elements from the top of the stack, therefore, we can loop through the string, when we meet a opening bracket, we can push to the stack, and when we meet a closing bracket, we can check if the top element of the stack is the corresponding one, if it is, we can pop from the stack, if not, we can return false.

If the stack is not empty after the loop, we know that there's some brackets are not closed, we can return false.

#### Time complexity Analysis (Big O)

#### Calculating Big O

When it comes to analyzing the time complexity of an algorithm, there're several things that we don't need to consider:

1. Constant doesn't matter
2. Smaller terms don't matter
3. Logarithmic terms don't matter

And we only think about the worst case scenario, take this task as an example, we need to loop through the input string, and for each character, we need to push and pop from the stack, we know that there're several operations that we need to do, but we only care about the most expensive one, which is the loop, so the time complexity of this task is `O(n)`, `n` is the length of the input string.

So the time complexity of this task is `O(n)`.
