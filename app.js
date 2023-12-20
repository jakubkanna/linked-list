// [ NODE(head) ] -> [ NODE ] -> [ NODE(tail) ] -> null

class LinkedList {
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
    let current = this.listHeadItem;

    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  // returns the first node in the list
  get head() {
    return this.listHeadItem.data;
  }

  // returns the last node in the list
  get tail() {
    let current = this.listHeadItem;

    while (current.next !== null) {
      current = current.next;
    }
    return current.data;
  }

  // returns the node at the given index
  at(index) {
    let current = this.listHeadItem;

    for (let i = 0; i < index; i++) {
      if (current === null) {
        return null; // Index out of bounds
      }
      current = current.next;
    }
    return current.data;
  }

  //removes the last element from the list
  pop() {
    if (!this.listHeadItem) return null; // List is empty

    if (!this.listHeadItem.next) {
      // If there is only one element, remove it
      const poppedValue = this.listHeadItem.data;
      this.listHeadItem = null;
      return poppedValue;
    }

    let current = this.listHeadItem;
    let previous = null;

    while (current.next !== null) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
  }

  //returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    let current = this.listHeadItem;
    while (current != null) {
      if (current.data === value) return true;
      current = current.next;
    }
    return false;
  }

  //returns the index of the node containing value, or null if not found.
  find(value, current = this.listHead, index = 0) {
    if (current === null) {
      return null; // Return null if list is empty
    }

    if (current.value === value) {
      return index; // Return the current index if there's a match
    }

    // Recursive case: Move to the next node and increment the index
    return this.find(value, current.nextNode, index + 1);
  }

  // prints LinkedList in console, the format should be: ( value ) -> ( value ) -> ( value ) -> null
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

//logs

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
list.prepend(item4);
list.append(item5);

console.table({
  list: list.toString(),
  size: list.size,
  tail: list.tail,
  head: list.head,
  ["at 1"]: list.at(1),
});
console.table({
  "list after pop": list.toString(),
  "contains John?": list.contains("John"),
  "find Abraham": list.contains("Abraham"),
});
console.log(list.insertAt(null, 2));
