class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Initialize a linked list

const node_0 = new ListNode(1);
const node_1 = new ListNode(3);
const node_2 = new ListNode(5);
const node_3 = new ListNode(7);
const node_4 = new ListNode(10);

// build reference between nodes

node_0.next = node_1;
node_1.next = node_2;
node_2.next = node_3;
node_3.next = node_4;
