// [ NODE(head) ] -> [ NODE ] -> [ NODE(tail) ] -> null

class LinkedList {
  //for readability
  iterateList(callback) {
    let current = this.listHeadItem;
    while (current !== null) {
      callback(current);
      current = current.next;
    }
  }

  constructor() {
    this.listHeadItem = null;
    this.listSize = 0;
  }

  // adds a new node containing value to the end of the list
  append(value) {
    const newNode = new Node(value);

    if (!this.listHeadItem) {
      // If the list is empty, set the new node as the head
      this.listHeadItem = newNode;
    } else {
      // Traverse the list to find the last node
      let current = this.listHeadItem;
      while (current.next !== null) {
        current = current.next;
      }
      // Append the new node to the end of the list
      current.next = newNode;
    }
  }

  // adds a new node containing value to the start of the list
  prepend(value) {
    this.listHeadItem = new Node(value, this.listHeadItem);
  }

  // returns the total number of nodes in the list
  get size() {
    let count = 0;

    while (this.listHeadItem.next !== null) {
      count++;
      this.listHeadItem = this.listHeadItem.next;
    }
    return count;
  }

  // returns the first node in the list
  get head() {
    return this.listHeadItem;
  }

  // returns the last node in the list
  get tail() {
    while (this.listHeadItem.next !== null) {
      this.listHeadItem = this.listHeadItem.next;
    }
    return this.listHeadItem.data;
  }

  // returns the node at the given index
  at(index) {}

  //removes the last element from the list
  pop() {}

  //returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {}

  //returns the index of the node containing value, or null if not found.
  find(value) {}

  // prints LinkedList in console, The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    let result = "";
    let current = this.listHeadItem;

    while (current !== null) {
      result += `(${current.data}) -> `;
      current = current.next;
    }

    result += current; // null
    return result;
  }

  //extra
  // that inserts a new node with the provided value at the given index
  insertAt(value, index) {}

  // that removes the node at the given index
  removeAt(index) {}
}

class Node {
  constructor(data, next) {
    this.data = data || null;
    this.next = next || null;
  }
}

//

const list = new LinkedList();

const [item1, item2, item3, item4, item5] = [
  "John",
  "Kate",
  "Wiktor",
  "Eva",
  "Michael",
];

list.prepend(item1);
list.append(item2);
list.append(item3);

console.log(list.toString());

console.log(list.size);

console.log(list.tail);
