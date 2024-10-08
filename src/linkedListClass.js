class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
export default class LinkedList {
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

  //  detertermine if list contains a node value
  contains(value) {
    if (this.head === null) {
      console.log('The list is empty');
      return false;
    }

    let current = this.head;
    // traverse to the last node
    while (current) {
      if (
        typeof current.value === 'string' &&
        current.value.toLowerCase() === value.toLowerCase()
      ) {
        console.log(true);
        return true;
      } else if (current.value === value) {
        console.log(true);
        return true;
      }
      current = current.nextNode;
    }

    console.log(false);
    return false;
  }

  // get the index of a node in the list
  find(value) {
    if (this.head === null) {
      console.log('The list is empty');
      return null;
    }

    let current = this.head;
    let count = 0;
    // traverse to the last node
    while (current) {
      if (
        typeof current.value === 'string' &&
        current.value.toLowerCase() === value.toLowerCase()
      ) {
        console.log(`Found '${value}' at index ${count}`);
        return count;
      } else if (current.value === value) {
        console.log(`Found '${value}' at index ${count}`);
        return count;
      }
      count++;
      current = current.nextNode;
    }

    console.log(`'${value}' not in list`);
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

  // delete the last list node
  pop() {
    if (this.head === null) {
      console.log('The list is empty');
      return;
    }

    let current = this.head;
    let previous = null;

    // traverse to the last node
    while (current.nextNode !== null) {
      previous = current;
      current = current.nextNode;
    }

    if (previous === null) {
      this.head = null;
    } else {
      previous.nextNode = null;
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

  // print the last list node value
  getListTail() {
    if (this.head === null) {
      console.log('The list is empty');
      return;
    }
    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    console.log(current.value);
  }

  // convert list to string and diplay it.
  toString() {
    if (this.head === null) {
      console.log('The list is empty');
      return '';
    }

    let current = this.head;
    let formattedList = '';

    while (current) {
      formattedList += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    formattedList += 'null';
    console.log(formattedList);
    return formattedList;
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
