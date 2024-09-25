# Learning Data Structures and Algorithms

## Introduction

Learning data structures is essential for every developer, but to be honest, it could be intimidating for developers who don't have a computer science background like myself. This repository is created to help my self learn data structures in a more practical way.

I will be focusing on the following data structures:

- Array
- Linked List
- Stack
- Queue
- Hash Table
- Tree
- Heap
- Graph

## Table of Contents

- [Array](#array)
  - [Basic Concepts](#basic-concepts)
  - [Advanced Concepts](#advanced-concepts)
  - [JavaScript Syntax](#javascript-syntax)
  - [Mini-Project: To-Do List](#mini-project-to-do-list)
- [Linked List](#linked-list)
  - [Basic Concepts](#basic-concepts-1)
  - [Advanced Concepts](#advanced-concepts-1)
  - [JavaScript Syntax](#javascript-syntax-1)
  - [Mini-Project: Music Playlist](#mini-project-music-playlist)
- [Stack](#stack)
  - [Basic Concepts](#basic-concepts-2)
  - [Advanced Concepts](#advanced-concepts-2)
  - [JavaScript Syntax](#javascript-syntax-2)
  - [Mini-Project: Browser History](#mini-project-browser-history)
- [Queue](#queue)
  - [Basic Concepts](#basic-concepts-3)
  - [Advanced Concepts](#advanced-concepts-3)
  - [JavaScript Syntax](#javascript-syntax-3)
  - [Mini-Project: Print Task Manager](#mini-project-print-task-manager)
- [Hash Table](#hash-table)
  - [Basic Concepts](#basic-concepts-4)
  - [Advanced Concepts](#advanced-concepts-4)
  - [JavaScript Syntax](#javascript-syntax-4)
  - [Mini-Project: Word Frequency Counter](#mini-project-word-frequency-counter)
- [Tree](#tree)
  - [Basic Concepts](#basic-concepts-5)
  - [Advanced Concepts](#advanced-concepts-5)
  - [JavaScript Syntax](#javascript-syntax-5)
  - [Mini-Project: File System Simulator](#mini-project-file-system-simulator)
- [Heap](#heap)
  - [Basic Concepts](#basic-concepts-6)
  - [Advanced Concepts](#advanced-concepts-6)
  - [JavaScript Syntax](#javascript-syntax-6)
  - [Mini-Project: Task Scheduler](#mini-project-task-scheduler)
- [Graph](#graph)
  - [Basic Concepts](#basic-concepts-7)
  - [Advanced Concepts](#advanced-concepts-7)
  - [JavaScript Syntax](#javascript-syntax-7)
  - [Mini-Project: Social Network Graph](#mini-project-social-network-graph)

### Array

#### Basic Concepts

- Definition and characteristics of arrays
- Indexing and accessing elements
- One-dimensional and multi-dimensional arrays

#### Advanced Concepts

- Dynamic arrays
- Sparse arrays
- Time complexity analysis of array operations

#### JavaScript Syntax

- Array declaration and initialization
- Methods that mutate the original array: `push()`,` pop()`, `shift()`,`unshift()`
- Methods that don't mutate the original array: `splice()`, `slice()`, `concat()`, `spread operator`
- Array iteration methods: `forEach()`, `map()`, `filter()`, `reduce()`

#### Mini-Project: To-Do List

Implement a simple to-do list using arrays to store tasks, with functionality to add, delete, and mark tasks as complete.

##### Project Requirements

1. Implement task addition with title, description, and status (incomplete/complete).
2. Implement task deletion.
3. Implement marking tasks as complete/incomplete.
4. Implement task list sorting (e.g., by addition time, by completion status).
5. Implement task filtering (e.g., show only incomplete tasks).
6. Implement task editing functionality.
7. Use `localStorage` to save the task list, ensuring data persistence after page refresh.

---

### Linked List

#### Basic Concepts

Structure and implementation of singly linked lists

- Node definition
- Insertion and deletion operations
- Time complexity analysis of linked list operations

#### Advanced Concepts

- Doubly linked lists
- Circular linked lists
- Singly linked list vs. doubly linked list

#### JavaScript Syntax

- Class usage
- Constructors and methods
- Concept of references and pointers

#### Mini-Project: Music Playlist

Implement a music playlist using a linked list to store songs, with functionality to add, delete, play next, and play previous.

##### Project Requirements

1. Implement song addition with title, artist, and duration.
2. Implement song deletion.
3. Implement next and previous song functionality.
4. Implement shuffle play functionality.
5. Implement song moving functionality (e.g., move a song to the beginning or end of the playlist).
6. Implement playlist saving and loading functionality.
7. Use a doubly linked list to optimize previous/next operations.

---

### Stack

#### Basic Concepts

- Definition and characteristics of stacks
- LIFO (Last In, First Out) principle
- Basic stack operations: push and pop

#### Advanced Concepts

- Implementing stacks using arrays
- Implementing stacks using linked lists
- Stack applications: bracket matching, expression evaluation

#### JavaScript Syntax

- Array methods: `push()` and `pop()`
- Custom stack class implementation

#### Mini-Project: Browser History

Implement a simplified version of browser history functionality using a stack to store visited URLs, with back and forward functionality.

##### Project Requirements

1. Implement page visit functionality, pushing visited URLs onto the history stack.
2. Implement back functionality, popping the most recent URL from the history stack.
3. Implement forward functionality using another stack to store forward history.
   Limit the maximum number of history entries, removing the oldest when exceeded.
4. Implement clear history functionality.
5. Implement functionality to view the complete history list.
6. Add bookmark functionality using another stack to manage bookmarks.

---

### Queue

#### Basic Concepts

- Definition and characteristics of queues
- FIFO (First In, First Out) principle
- Basic queue operations: enqueue and dequeue

#### Advanced Concepts

- Circular queues
- Double-ended queues (Deque)
- Priority queues

#### JavaScript Syntax

- Array methods: `push()` and `shift()`
- Custom queue class implementation

#### Mini-Project: Print Task Manager

Implement a simple print task manager using a queue to store print jobs, processing tasks according to the FIFO principle.

##### Project Requirements

1. Implement adding print tasks to the queue, each task including document name and page count.
2. Implement executing print tasks (removing tasks from the queue front and "printing").
3. Implement viewing all pending print tasks in the current queue.
   Implement canceling specific print tasks in the queue.
4. Implement priority printing functionality (inserting tasks at the front of the queue).
5. Use a priority queue to arrange print order based on task importance or page count.
6. Implement print progress display, showing the current printing task and its progress.

---

### Hash Table

#### Basic Concepts

- Hash table concepts and principles
- Hash functions
- Collision handling: chaining and open addressing

#### Advanced Concepts

- Hash table resizing (expansion and contraction)
- Hash table performance analysis
- Common hash functions

#### JavaScript Syntax

- Using Objects and Maps
- Object methods: `Object.keys()`, `Object.values()`, `Object.entries()`
- Map methods: `set()`, `get()`, `has()`, `delete()`

#### Mini-Project: Word Frequency Counter

Implement a word frequency counter using a hash table to store words and their occurrence counts, with fast lookup and update capabilities.

##### Project Requirements

1. Implement functionality to read words from text input and count frequencies.
2. Use a hash table (e.g., JavaScript's Map) to store words and their occurrence counts.
3. Implement functionality to query the frequency of specific words.
   Implement functionality to display the top N most frequent words.
4. Implement functionality to ignore common words (e.g., "the", "a", "an").
5. Implement case-insensitive word counting.
6. Implement functionality to export statistics results in JSON format.

---

### Tree

#### Basic Concepts

- Tree terminology: root, nodes, leaves, parent nodes, child nodes
- Binary tree definition and characteristics
- Tree traversal: pre-order, in-order, post-order

#### Advanced Concepts

- Balanced binary trees (AVL trees)
- Binary search trees (BST)
- Tree applications: expression trees, decision trees

#### JavaScript Syntax

- Recursive functions
- Class inheritance

#### Mini-Project: File System Simulator

Implement a simple file system simulator using a tree structure to represent the hierarchy of files and folders, supporting operations like create, delete, and move.

##### Project Requirements

1. Implement functionality to create files and folders.
2. Implement functionality to delete files and folders.
3. Implement functionality to move files and folders.
   Implement functionality to display the current file system structure (similar to the tree command).
4. Implement file/folder renaming functionality.
5. Implement file/folder search functionality.
6. Implement functionality to calculate folder sizes (assuming each file has a size attribute).

---

### Heap

#### Basic Concepts

- Heap definition and characteristics
- Max heaps and min heaps
- Basic heap operations: insertion and deletion

#### Advanced Concepts

- Heapsort
- Priority queue implementation
- Heap applications: Top K problems

#### JavaScript Syntax

- Array implementation of heaps
- Comparison function usage

#### Mini-Project: Task Scheduler

Implement a simple task scheduler using a min heap to manage task priorities, capable of dynamically adding tasks and executing the highest priority task.

##### Project Requirements

1. Implement functionality to add tasks, each task including title, priority, and estimated execution time.
2. Use a min heap to manage tasks, ensuring high priority tasks are executed first.
3. Implement functionality to execute the highest priority task.
   Implement functionality to display all pending tasks, sorted by priority.
4. Implement functionality to update task priorities.
5. Implement task execution progress display.
6. Implement functionality to add periodic tasks at set intervals.

---

### Graph

#### Basic Concepts

- Basic graph concepts: vertices, edges, directed graphs, undirected graphs
- Graph representation: adjacency matrices and adjacency lists
- Graph traversal: Depth-First Search (DFS) and Breadth-First Search (BFS)

#### Advanced Concepts

- Shortest path algorithms: Dijkstra's algorithm
- Minimum spanning trees: Prim's algorithm and Kruskal's algorithm
- Graph applications: social network analysis, routing algorithms

#### JavaScript Syntax

- Implementing graphs using Maps and Sets
- Recursive and iterative implementation methods

#### Mini-Project: Social Network Graph

Implement a simple social network analyzer using a graph structure to represent relationships between users, capable of calculating shortest paths between users, finding mutual friends, etc.

##### Project Requirements

1. Implement functionality to add users (vertices) and friendships (edges).
2. Implement functionality to remove users and friendships.
3. Implement functionality to find the shortest path (least intermediaries) between two users.
   Implement functionality to find all friends of a given user.
4. Implement functionality to find mutual friends.
5. Implement community detection functionality (find closely connected user groups).
6. Implement new friend recommendation functionality (based on the number of mutual friends).

---

### Learning Resources

- [Hello Algorithm](https://www.hello-algo.com)
- [Adrian Mejia Blog](https://adrianmejia.com/)
