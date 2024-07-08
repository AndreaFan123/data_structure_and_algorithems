# Day 1 : Array

first thing first, Javascript is a **dynamic language with dynamic data types**m. You may ask "what the heck is a dynamic language?" and "Is there a opposite of it?".

Yes, the opposite of a dynamic language is called **Static language**, Java, C, C++ are some examples of static languages.

There're several differences between dynamic and static languages, such as:

- Dynamic languages execute at runtime, while Static languages execute at compile time.
- Dynamic languages are more flexible, while Static languages are more strict.

In terms of data types, Dynamic languages are more flexible, you can change the data type of a variable at runtime, while Static languages are more strict, you have to declare the data type of a variable before using it.

In Javascript, you can declare a variable without specifying its data type, like this:

```javascript
let x = 10; // x is a number
x = "Hello"; // x is a string
```

But in Java, you have to declare the data type of a variable before using it, like this:

```java
int x = 10; // you need to specify that x is a number as int
x = "Hello"; // this will cause an error

string x = "Hello"; // you need to specify that x is a string as string
x = 10; // this will cause an error
```

Also, JavaScript is a **weak typed** language, which means that you can perform operations on variables without worrying about their data types, like this:

```javascript
let x = 10;
let y = "5";
let z = x + y; // z is "105"
```

We call such behavior **type coercion**, which is the process of converting one data type to another. In this case, JavaScript converts the number `10` to a string `"10"` and concatenates it with the string `"5"`, you need to understand the rule of type coercion in JavaScript to avoid unexpected results.

## Array in JavaScript

An array is a data structure that stores a collection of elements, each element is identified by an index. In JavaScript.

In JavaScript, it is allowed to store different data types in an array, or sparse elements, like this:

```javascript
const mixedArray = [1, "Hello", true, null, undefined];
const sparseArray = [1, , 3];
```

## Basic operations

### Accessing elements

In JavaScript, we can access elements of an array using index notation, like this:

```javascript
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Cherry
```

> Note: In stead of starting from 1, the index of an array starts from 0, but if we are talking about the length of an array, it starts from 1.

Take the above example, the length of the array `fruits` is 3, but the index of the last element is 2.

---

### Modifying elements

If we want to modify an element of an array, we can simply assign a new value to it, like this:

```javascript
const fruits = ["Apple", "Banana", "Cherry"];
fruits[1] = "Orange";
console.log(fruits); // ["Apple", "Orange", "Cherry"]
```

---

### Adding elements

#### Basic, as we only add one element at the end or the beginning of an array

If we want to add an element to the **end of an array**, we use `push` method, like this:

```javascript
const fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Orange");
console.log(fruits); // ["Apple", "Banana", "Cherry", "Orange"]
```

If we want to add an element to the **beginning of an array**, we use `unshift` method, like this:

```javascript
const fruits = ["Apple", "Banana", "Cherry"];
fruits.unshift("Orange");
console.log(fruits); // ["Orange", "Apple", "Banana", "Cherry"]
```

#### Advanced, adding an elements in the middle of an array.

This is a common interview question as this is involved in the concept of **insertion** and often would be asked to implement a function that inserts an element at a specific index, then ask you to analyze the time complexity of your implementation.

<details>
<summary>Mock Interview question</summary>

😀 I'd like you to implement a function called insertIntoMiddle that takes three parameters:

- An array of any type of elements
- An element to be inserted
- An index where the element should be inserted

The function should insert the given element at the specified index in the array, shifting all subsequent elements one position to the right. The original array should be modified in-place, and the function should return the modified array.

Here are a few key points to consider or to ask for clarification:

- 🤔 Should the function work with arrays of any length and with any type of elements?

- 🤔 Does the provided index always fall within the bounds of the array?

```javascript
// Use splice method
let arr = [1, 2, 3, 4, 5];
let inserIndx = 2;
let eleToInsert = 10;

arr.splice(insertIndx, 0, eleToInsert); // [1, 2, 10, 3, 4, 5]
```

> [!NOTE] Reference: [splice() Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

Let's implement our own function, let's clarify the steps:

1. We need to check if the index is valid, if not, we should return the original array.
2. We need to iterate over the array.
3. We need to find the position where the element should be inserted.
4. We need to insert the element at the specified index.
5. We need to return the modified array.

```javascript
function insertIntoMiddle(arr, ele, indx) {
  if (indx < 0 || indx > arr.length) {
    return arr;
  }

  for (let i = arr.length; i > indx; i--) {
    arr[i] = arr[i - 1];
  }

  arr[indx] = ele;

  return arr;
}

let arr = [1, 2, 3, 4, 5];
let inserIndx = 2;
let eleToInsert = 10;

console.log(insertIntoMiddle(arr, eleToInsert, insertIndx)); // [1, 2, 10, 3, 4, 5]
```

</details>

---

### Removing elements

#### Basic, as we only remove one element at the end or the beginning of an array

If we want to removing an element from the **end of an array**, we use `pop` method, like this:

```javascript
const fruits = ["Apple", "Banana", "Cherry"];
fruits.pop();
console.log(fruits); // ["Apple", "Banana"]
```

If we want to removing an element from the **beginning of an array**, we use `shift` method, like this:

```javascript
const fruits = ["Apple", "Banana", "Cherry"];
fruits.shift();
console.log(fruits); // ["Banana", "Cherry"]
```

Here we can summarize the basic operations of an array:

<!-- Create a table -->

| Operation          | Description                                      | Example                    |
| ------------------ | ------------------------------------------------ | -------------------------- |
| Accessing elements | Access an element of an array                    | `fruits[0]`                |
| Modifying elements | Modify an element of an array                    | `fruits[1] = "Orange"`     |
| Adding elements    | Add an element to the end of an array            | `fruits.push("Orange")`    |
| Removing elements  | Remove an element from the end of an array       | `fruits.pop()`             |
| Adding elements    | Add an element to the beginning of an array      | `fruits.unshift("Orange")` |
| Removing elements  | Remove an element from the beginning of an array | `fruits.shift()`           |

#### Advanced, removing an elements in the middle of an array.

Same as the insertion, this is a common interview question as this is involved in the concept of **deletion** and often would be asked to implement a function that deletes an element at a specific index, then ask you to analyze the time complexity of your implementation.

<details>
<summary>Mock Interview question</summary>

```javascript
// Use splice
let arr = [1, 2, 3, 4, 5];
let deleteIndx = 2;

arr = arr.splice(deleteIndx, 1); // [1, 2, 4, 5]
```

```javascript
// Implement our own function

function deleteFromMiddle(arr, indx) {
  if (indx < 0 || indx >= arr.length) {
    return arr;
  }

  for (let i = indx; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;

  return arr;
}

let arr = [1, 2, 3, 4, 5];
let deleteIndx = 2;

console.log(deleteFromMiddle(arr, deleteIndx)); // [1, 2, 4, 5]
```

</details>

---

### Searching elements

If we want to search for an element in an array, we can use `indexOf` method, like this:

```javascript
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.indexOf("Banana")); // 1
```

Or we can use `includes` method, like this:

```javascript
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.includes("Banana")); // true
```

---

### Sorting elements

If we want to sort the elements of an array, we can use `sort` method, like this:

```javascript
const fruits = ["Banana", "Apple", "Cherry"];
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Cherry"]
```

Or we can use `reverse` method, like this:

```javascript
const fruits = ["Apple", "Banana", "Cherry"];
fruits.reverse();
console.log(fruits); // ["Cherry", "Banana", "Apple"]
```

---

### Iterating elements

If we want to iterate over the elements of an array, we can use `for` loop, like this:

```javascript
const fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // Apple, Banana, Cherry
}
```

Or we can use `forEach` method, like this:

```javascript
const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach((fruit) => {
  console.log(fruit); // Apple, Banana, Cherry
});
```

Or we wan use `for...of` loop, like this:

```javascript
const fruits = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits) {
  console.log(fruit); // Apple, Banana, Cherry
}
```

Or we can use `map` method, like this:

```javascript
const fruits = ["Apple", "Banana", "Cherry"];
const uppercasedFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(uppercasedFruits); // ["APPLE", "BANANA", "CHERRY"]
```

> [!IMPORTANT]
>
> The difference between `forEach` and `map` is that `forEach` doesn't return a new array, while `map` does.

---

### Filtering elements

If we want to filter elements of an array, we can use `filter` method, like this:

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

---

### Reducing elements

If we want to reduce elements of an array to a single value, we can use `reduce` method, like this:

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum); // 15
```

In the above example, the `reduce` method takes two arguments, the first argument is a callback function that takes two parameters, the `accumulator` and the `current value`, the second argument is the initial value of the `accumulator`.

---

### Slicing elements

If we want to get a part of an array, we can use `slice` method, like this:

```javascript
const fruits = ["Apple", "Banana", "Cherry", "Orange"];
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // ["Banana", "Cherry"]
```

In the above example, the `slice` method takes two arguments, the first argument is the start index, and the second argument is the end index (exclusive).

## Real Life Example

In real life, there're many applications that use arrays, such as:

1. To-do list
2. Shopping cart
3. Calendar
4. Address book
5. Music playlist
