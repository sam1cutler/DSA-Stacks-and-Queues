//const { isEmpty } = require("./stack-helpers");
const Queue = require('./queue');

const queueHelpers = {

    peek(inpQueue) {
        return inpQueue.first.value;
    },

    isEmpty(inpQueue) {

        if (inpQueue.first) {
            return 'Queue is not empty.'
        } else if (!inpQueue.first) {
            return 'Queue is empty.'
        }
        
    },

    display(inpQueue) {

        let output = [];

        let currNode = inpQueue.first;

        while (currNode) {
            output.push(currNode.value);
            currNode = currNode.next;
        }

        return output;

    },

    squareDance(inpArray) {

        const maleQueue = new Queue();
        const femaleQueue = new Queue();

        let outputMessages = [];

        // iterate through dancers in input array
        for (let i=0 ; i<inpArray.length ; i++) {
            
            // pull out relevant info
            const activeDancer = inpArray[i].split(' ');
            const sex = activeDancer[0];
            const name = activeDancer[1];

            // consider if dancer is male:
            if (sex === 'M') {
                // consider if there is a female dancer available:
                if (femaleQueue.first) {
                    const femaleDancer = femaleQueue.dequeue();
                    const pairing = `
                        Female dancer is ${femaleDancer}, and the male dancer is ${name}.
                    `;
                    outputMessages.push(pairing);
                } else if (!femaleQueue.first) {
                    maleQueue.enqueue(name);
                }
            }

            // consider if dancer is female:
            if (sex === 'F') {
                // consider if there is a male dancer available:
                if (maleQueue.first) {
                    const maleDancer = maleQueue.dequeue();
                    const pairing = `
                        Female dancer is ${name}, and the male dancer is ${maleDancer}.
                    `;
                    outputMessages.push(pairing);
                } else if (!maleQueue.first) {
                    femaleQueue.enqueue(name);
                }
            }
        }

        return outputMessages;

    }

}

module.exports = queueHelpers;