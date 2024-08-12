# Hash Table

## Table of Contents

### Introduction

Hash table also called has map, it is a data structure that stores **key-value** paris. We can look up the value by key in **constant time (O(1))**, which is very efficient.

### Comparison with Array and Linked List

| Data Structure | Search Time | Insert Time | Delete Time |
| -------------- | ----------- | ----------- | ----------- |
| Array          | O(n)        | O(n)        | O(n)        |
| Linked List    | O(n)        | O(1)        | O(1)        |
| Hash Table     | O(1)        | O(1)        | O(1)        |

By looking at the table above, we can see that hash table is the most efficient data structure among the three.

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
