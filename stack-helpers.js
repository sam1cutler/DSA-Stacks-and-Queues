const Stack = require ('./stack');

const stackHelpers = {

    peek(inputStack) {
        return inputStack.top.data;
    },

    isEmpty(inputStack) {
        if (inputStack.top === null) {
            return 'Stack is empty'
        } else {
            return 'Stack has stuff in it'
        }
    },

    display(inputStack) {

        let output = [];
        let currNode;

        if (inputStack.top === null) {
            return 'Stack is empty'
        } else {
            currNode = inputStack.top;
        }

        while (currNode) {
            output.push(currNode.data);
            currNode = currNode.next;
        }
        
        return output;
    },

    is_palindrome(string) {

        string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
        
        // Generate a stack from half of the string --> will be in "reverse" order
        const stackedString = new Stack();

        const halfwayIndex = Math.ceil(string.length/2);
        //console.log(half);

        // define different midpoint indices if string had odd vs. even # of chars
        if (string.length%2 === 0) {
            endStackingHere = string.length/2;
            startComparingHere = string.length/2;
        } else if (string.length%2 === 1) {
            endStackingHere = Math.ceil(string.length/2);
            startComparingHere = Math.floor(string.length/2);
        }
        
        for (let i=0 ; i<endStackingHere ; i++) {
            //console.log(string[i]);
            stackedString.push(string[i]);
        }
        
        //console.log(stackedString);

        // starting at halfway point of string,
        for (let i=startComparingHere ; i<string.length ; i++) {
            // define current character in the string
            const currChar = string[i];

            // compare to the current top element in the stack
            if (currChar === stackedString.top.data) {
                // so far so good; need to pop this char off the stack
                stackedString.pop();
            } else if (currChar !== stackedString.top.data) {
                // evidence string is not a palindrome, so
                return 'The string is *not* a palindrome.'
            }
        }

        // if didn't encounter any stack / char mis-matches - it's a palindrome.
        return 'The string is a palindrome.'

    },

    matchingBrackets(inputExpression) {

        // TBD


    }

}

module.exports = stackHelpers;