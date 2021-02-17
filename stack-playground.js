const Stack = require('./stack');
const stackHelpers = require('./stack-helpers');


const testStack = new Stack();
//console.log(testStack);

testStack.push('splat');
//console.log(testStack);

testStack.push('blrgh');
//console.log(testStack);

testStack.push('bam');
//console.log(testStack);

testStack.pop();
//console.log(testStack);

//console.log(stackHelpers.peek(testStack));

//console.log(stackHelpers.isEmpty(testStack));

const testStack2 = new Stack();
//console.log(stackHelpers.isEmpty(testStack2));

//console.log(stackHelpers.display(testStack));
testStack.push('shazam');
//console.log(stackHelpers.display(testStack));

//console.log(stackHelpers.is_palindrome('A man, a pla, a canal: Panama'));

console.log(stackHelpers.is_palindrome('A man, a plan, a canal: Panama'));