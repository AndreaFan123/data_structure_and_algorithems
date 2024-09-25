# Hash Table

## Table of Contents

- [Introduction](#introduction)
- [Comparison with Array and Linked List](#comparison-with-array-and-linked-list)
- [Common Operations](#common-operations)
  - [Implementation](#implementation)
- [Three types of ways to traverse a hash table](#three-types-of-ways-to-traverse-a-hash-table)
  - [Implementation](#implementation-1)
- [Objects vs. Hash Map](#objects-vs-hash-map)
- [Hash Function](#hash-function)
  - [Division Method](#division-method)
  - [Multiplication Method](#multiplication-method)
  - [Choose m (Size of Hash Table) Wisely](#choose-m-size-of-hash-table-wisely)
  - [Naming Convention](#naming-convention)
- [How to Handle Collision](#how-to-handle-collision)
- [Parsing string to integer - real world example](#parsing-string-to-integer---real-world-example)
  - [CSS](#css)

---

### Introduction

**Hash table** also called **hash map**, it is a data structure that stores **key-value** pairs. We can look up the value by key in **constant time (O(1))**, which is very efficient.

### Comparison with Array and Linked List

| Data Structure | Search Time | Insert Time | Delete Time |
| -------------- | ----------- | ----------- | ----------- |
| Array          | O(n)        | O(n)        | O(n)        |
| Linked List    | O(n)        | O(1)        | O(1)        |
| Hash Table     | O(1)        | O(1)        | O(1)        |

By looking at the table above, we can see that hash table is the most efficient data structure among the three.

---

### Common Operations

1. **Insert**: Insert a key-value pair into the hash table.
2. **Delete**: Delete a key-value pair from the hash table.
3. **Search**: Search a value by key in the hash table.

#### Implementation

```typescript
// Initialize a hash table
const map = new Map<number, string>();

// Insert a key-value pair
map.set(1, "one");
map.set(2, "two");
map.set(3, "three");
map.set(4, "four");

// search a value by key
let name = map.get(1);
console.log(name); // one

// delete a key-value pair
map.delete(1);
name = map.get(1);
console.log(name); // undefined
```

---

### Three types of ways to traverse a hash table

1. **Traversing Key**: Traverse all keys in the hash table.
2. **Traversing Value**: Traverse all values in the hash table.
3. **Traversing Key-Value Pair**: Traverse all key-value pairs in the hash table.

#### Implementation

```typescript
// Initialize a hash table
const map = new Map<number, string>();

// Insert a key-value pair
map.set(1, "one");
map.set(2, "two");
map.set(3, "three");
map.set(4, "four");

// 1. Traversing Key
for (const k of map.key()) {
  console.log(k); // 1, 2, 3, 4
}

// 2. Traversing Value
for (const v of map.values()) {
  console.log(v); // one, two, three, four
}

// 3. Traversing Key-Value Pair
for (const [k, v] of map) {
  console.log(k, v); // 1 one, 2 two, 3 three, 4 four
}
```

---

### Objects vs. Hash Map

We know that we can implement a key-value pair data structure using object in JS, so is this mean that object is a hash map? The answer is No, but also Yes.

We can treat object as a special implementation of the hash map data structure, but we also need to keep in mins that object class adds its own keys.

In 2015, ES6 introduced the `Map` class, which is a real hash map data structure.

---

### Hash Function

- In CS, hash function is a commonly used idea, i.e., Password are hashed before storing in the database.
- JS objects and arrays are hashed.
- The principle of a hash function is to convert one value to another.

#### Division Method

- **m** is the size of the hash table.

Let's say we have a hash table of length 10 (0, 1, 2, 3, 4, 5, 6, 7, 8, 9), so the m is 10.

- **n** is the number of elements to store into hash table.

Let's say we have 5 elements to store into hash table, so the n is 5.

- Formula: `index = key mod(%) m`

- Collision: When two or more objects happen to be hashed into the same index in the hash table.

- Load Factor: `n/m`, it is the ratio of the number of elements to the size of the hash table.

Take the above example, **m** = 10, **n** = 5, n/m = 0.5 (50%), if **m** is getting larger, means that the range of index is getting larger, therefore it is less likely to have a collision, in contrast, if **m** is getting smaller, means that the range of index is getting smaller, therefore it is more likely to have a collision.

In conclusion:

- Smaller load factor(m is bigger): less likely to have a collision.
- Larger load factor(n is bigger): more likely to have a collision.

#### Multiplication Method

- **m** is the size of the hash table.
- **n** is the number of elements to store into hash table.
- **A** is a constant number between 0 and 1, it is a irrational number, a irrational number cannot be expressed as the ratio of two integers.
- formula: `index = m * (key * A mod(%) 1)`

#### Choose m (Size of Hash Table) Wisely

- Ideally, integer **m** has to be a number that it "far" enough from 2^P, where P is a positive integer.(Because 10^P is divided by 2^P).

```typescript
m = 8

Kevin with ID 1004
1004 % 8 = 4

Alice with ID 3012
3012 % 8 = 4

Jack with ID 5020
5020 % 8 = 4
```

See example above, all three people are hashed into the same index 4, which is a collision, therefore we need to choose **m** that is "far" enough from 2^P.

#### Naming Convention

If naming convention is similar, it is more likely to have a collision.

---

### How to Handle Collision

- Store elements into an array at the same index, which is called **Separate Chaining**, think of it as an array of arrays. Hash table is an array itself, and each element in the hash table is an array.

Let's assuming that after mod operation, we have three elements that are hashed into the same index 4, so we can store them into an array at index 4, like this: [1004, 3012, 5020].

### Parsing string to integer - real world example

#### CSS

We know that we can define a color in CSS using a string, like this:

```css
p {
  color: black;
}

.quote {
  color: red;
}
```

But how does the browser know that `black` is `#000000` and `red` is `#FF0000`?

We can store all the color names in a hash table, but the problem is that whether is white or red, they are all strings, we don't have integers to be hashed. So how can we deal with this situation as when hah keys are not integers?

1. We can use the length of the string as the integer, not it's not efficient as many color names could have the same length, leading to collisions.

2. Take the ASCII value of each character in the string and sum them up, then hash the sum.

3. Combine the ASCII value of each character in the string and the length of the string to multiply or add them together, then hash the result.

Why we don't store this kind of information in an array? Because the array is not efficient when it comes to searching, and we need to search the color name in the hash table in constant time.

Using `charCodeAt()` method to get the ASCII value of a character in JS, for example:

```typescript
const greeting = "Hello World";

// Let say we want to find out e's ASCII
const index = 1; // 0 is H, 1 is e

console.log(greeting.charCodeAt(index)); // 101
```
