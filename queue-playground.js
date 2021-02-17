const Queue = require('./queue');
const queueHelpers = require('./queue-helpers');

const QueueTwo = require('./queue2');

const testQueue1 = new Queue();

testQueue1.enqueue('here');
testQueue1.enqueue('we');
testQueue1.enqueue('go?');

//console.log(testQueue1);

const trekQ = new Queue();

trekQ.enqueue('Kirk');
trekQ.enqueue('Spock');
trekQ.enqueue('Uhura');
trekQ.enqueue('Sulu');
trekQ.enqueue('Checkov');
//console.log(trekQ);

//console.log(queueHelpers.peek(testQueue1));

const testQueue2 = new Queue();
//console.log(queueHelpers.isEmpty(testQueue2));

/*
console.log(queueHelpers.display(trekQ));

console.log(`Removed ${trekQ.dequeue()}`);
console.log(queueHelpers.display(trekQ));

console.log(`Removed ${trekQ.dequeue()}`);
console.log(queueHelpers.display(trekQ));
*/


/*
const doubleQueue1 = new QueueTwo();
console.log(doubleQueue1);

doubleQueue1.enqueue('here');
console.log(doubleQueue1);

doubleQueue1.enqueue('we');
console.log(doubleQueue1);

doubleQueue1.enqueue('go!');
console.log(doubleQueue1);
*/

const danceArray = ['F Jane',
    'M Frank',
    'M John',
    'M Sherlock',
    'F Madonna',
    'M David',
    'M Christopher',
    'F Beyonce',
    'F Betty',
    'F Jane Doe'
]

const partnersList = queueHelpers.squareDance(danceArray);

for (let i=0 ; i<partnersList.length ; i++) {
    console.log(partnersList[i]);
}