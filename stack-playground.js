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
//testStack.push('shazam');
//console.log(stackHelpers.display(testStack));

//console.log(stackHelpers.is_palindrome('A man, a pla, a canal: Panama'));

//console.log(stackHelpers.is_palindrome('A man, a plan, a canal: Panama'));


//const testExpressionBad1 = ('x + (3+7))');
//console.log(stackHelpers.matchingParentheses(testExpressionBad1));

const testStack3 = new Stack();
testStack3.push(7);
testStack3.push(5);
testStack3.push(900);
testStack3.push(9);
testStack3.push(101);
testStack3.push(2);
testStack3.push(67);
testStack3.push(11);
testStack3.push(-5);

console.log(stackHelpers.display(testStack3));
const ordered3 = stackHelpers.sort(testStack3);
console.log(stackHelpers.display(ordered3));