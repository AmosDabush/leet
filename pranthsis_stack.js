function solution(S) {
    const stack = []
    const length = S.length

    for (let i = 0; i < length; i++) {
        if (S[i] === '(') {
            //opner add to stack
            stack.push(S[i])
        } else {
            //closer
            if (stack.length === 0) {
                return 0
            }
            const pop = stack.pop()
            if (pop !== '(') {
                return 0
            }
        }
    }

    return stack.length === 0 ? 1 : 0
}
// Example usage:
console.log(solution('(((())))'));

console.log(solution('((())()()(())()'));


/**A string S consisting of N characters is called properly nested if:

S is empty;
S has the form "(U)" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, string "(()(())())" is properly nested but string "())" isn't.

Write a function:

function solution(S);

that, given a string S consisting of N characters, returns 1 if string S is properly nested and 0 otherwise.

For example, given S = "(()(())())", the function should return 1 and given S = "())", the function should return 0, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..1,000,000];
string S is made only of the characters '(' and/or ')'.
Copyright 2009–2023 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited. */