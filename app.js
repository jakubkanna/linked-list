// [ NODE(head) ] -> [ NODE ] -> [ NODE(tail) ] -> null

class LinkedList {
  append(value) {
    // adds a new node containing value to the end of the list
  }
  prepend(value) {
    // adds a new node containing value to the start of the list
  }
  get size() {
    // returns the total number of nodes in the list
  }
  get head() {
    // returns the first node in the list
  }
  get tail() {
    // returns the last node in the list
  }
  at(index) {
    // returns the node at the given index
  }
  pop() {
    //removes the last element from the list
  }
  contains(value) {
    //returns true if the passed in value is in the list and otherwise returns false.
  }
  find(value) {
    //returns the index of the node containing value, or null if not found.
  }
  toString() {
    /**
     * represents your LinkedList objects as strings,
     * so you can print them out and preview them in the console.
     * The format should be: ( value ) -> ( value ) -> ( value ) -> null
     */
  }
  //extra
  insertAt(value, index) {
    // that inserts a new node with the provided value at the given index
  }
  removeAt(index) {
    // that removes the node at the given index
  }
}
class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}

const list = new LinkedList();
