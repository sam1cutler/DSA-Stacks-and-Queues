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

    matchingParentheses(inputExpression) {

        const expressionStack = new Stack();

        for (let i=0 ; i<inputExpression.length ; i++) {
            const currChar = inputExpression[i];
            //console.log(currChar);

            // if encounter open parentheses...
            if (currChar === '(') {
                // ... should push a tick onto expressionStack
                expressionStack.push('tick');
            } else if (currChar === ')') {
                // a close parentheses should always end the most-recently-opened parentheses;
                // corollary: there should be something on stack (= un-closed parenthesis) to pop off
                if (expressionStack.top) {
                    expressionStack.pop();
                } else {
                    return `You are missing a '('.`
                }
                
            }
        }

        if (expressionStack.top === null) {
            return 'Expression has valid parentheses.'
        } else if (expressionStack.top) {
            return `You are missing a ')'.`
        }
    },

    sort(inpStack) {

        const outStack = new Stack();

        // want to continue the following until inpStack is empty
        while (inpStack.top) {

            activeVal = inpStack.pop();

            // if activeVal is less than top of outStack (or its empty,)
            if (!outStack.top || activeVal < outStack.top.data) {
                // add activeVal to outStack
                outStack.push(activeVal);
            } else if (activeVal > outStack.top.data) {
                // but if activeVal is too big, need to move top-most value
                //    on outstack to inp stack,
                inpStack.push(outStack.pop());
                //    and also push activeVal back on to inpStack,
                //    so that on next run of while loop, 
                //    this value will be the "active" value again.
                inpStack.push(activeVal);
                // this should end this loop of the while loop,
                // inpStack still has contents,
                // and the comparison will repeat with new state of inp vs. outStacks
            }
        }

        return outStack;

    }

}

module.exports = stackHelpers;