// import './style.css';

class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert values at the end of the list
  append(value) {
    let node = new Node(value);
    let current;

    // chech if list is empty. If empty, make the first entry the head
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.nextNode) {
        current = current.nextNode;
      }

      // Append at the end of the list
      current.nextNode = node;
    }
    this.size++;
  }

  // Insert values at the beginning of the list. Thereby changing the head
  prepend(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }

  // insert a new node at a specific index
  insertAt(value, index) {
    // if index is out of range, append to the end of the list
    if (index > 0 && index > this.size) {
      console.log(
        `Index '${index}' is out of range. Appending '${value}' at the end.`,
      );
      this.append(value);
      return;
    }

    // If the index is 0, make the new node the head
    if (index === 0) {
      this.head = new Node(value, this.head);
      return;
    }

    const node = new Node(value);
    let current, previous;

    // set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      //  set the previous to the node before index
      previous = current;
      count++;
      //  now set current after node
      current = current.nextNode;
    }

    // set the new node to be the value of current
    node.nextNode = current;
    previous.nextNode = node;

    this.size++;
  }

  // print the value of a node at a specific index
  getAt(index) {
    if (index < 0 || index >= this.size) {
      console.log(`Index '${index}' is out of range`);
      return;
    }

    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.value);
      }
      count++;
      current = current.nextNode;
    }
    return null;
  }

  // remove a node from a specific index
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      console.log(`Index '${index}' is out of range`);
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // if specified index is the head, delete and set the next node as the head
    if (index === 0) {
      this.head = current.nextNode;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.nextNode;
      }
      previous.nextNode = current.nextNode;
    }

    this.size--;
  }

  getListSize() {
    if (this.size === 0) {
      console.log('The list is empty');
      return;
    } else {
      console.log(`The list has ${this.size} node${this.size > 1 ? 's' : ''}`);
    }
  }

  getListHead() {
    if (this.head === null) {
      console.log('The list is empty');
      return;
    } else {
      console.log(this.head.value);
    }
  }

  // print list data
  printListValue() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.nextNode;
    }
  }

  // clear the list
  clearList() {
    this.head = null;
    this.size = 0;
  }
}

const list = new LinkedList();

list.append('dog');
list.append('cat');
// list.append('parrot');
// list.append('hamster');
// list.append('snake');
// list.append('turtle');
// list.insertAt('monkey', 2);
list.getListSize();

list.printListValue();

list.getListHead();
