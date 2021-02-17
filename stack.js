const _Node = require('./stack-node');
//const stackHelpers = require('./stack-helpers');

class Stack {
    
    constructor() {
        this.top = null;
    }

    push(data) {

        // if stack currently empty, pushed node will now be top of the stack
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        // if stack *not* empty, pushed node will be top of the stack, 
        //     and its `next` will point to former top of the stack
        const node = new _Node(data, this.top);
        this.top = node;

    }

    pop() {
        // identify current top of the node
        const currentEnd = this.top;

        // set the Stack's top to be the current 2nd (so, currentEnd's `next`)
        this.top = currentEnd.next;

        return currentEnd.data;
    }

}

module.exports = Stack;

