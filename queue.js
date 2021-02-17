const _Node = require('./queue-node');

class Queue {

    // constructor contains first + last nodes (beginning + end)
    constructor() {
        this.first = null;
        this.last = null;
    }

    // insertion ("enqueue") can ONLY happen at the END of the queue
    enqueue(data) {

        // create a new node with the data
        const node = new _Node(data);

        // if the queue is empty, new node is the first in the queue 
        if (this.first === null) {
            this.first = node;
        }

        // if the queue is NOT empty, new node becomes last in the queue,
        //    and the previously-last item now points its next to new node
        if (this.last) {
            this.last.next = node;
        }

        // in either of 2 above scenarios, new node must now be last item in the queue
        this.last = node;
    }

    // removal ("deque") can ONLY happen at the FRONT of the queue
    dequeue() {

        // if queue is empty, nothing to do
        if (this.first === null) {
            return;
        }

        // otherwise, identify the first node in the queue
        const node = this.first;

        // re-specify the first to be the NEXT node 
        //    (e.g., the `next` pointed to by former first)
        this.first = this.first.next;
        // (^^this will be valid even if `next` points to null)

        // if dequeueing what had also been the LAST node in the queue,
        //    also need to specify that the queue's `last` should be null
        if (node === this.last) {
            this.last = null;
        }

        // return the de-queued value:
        return node.value;
    }

    
    


}

module.exports = Queue;