// Valid Parentheses - LeetCode
// Difficulty : Easy

// Description
/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false


Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 * 
 */

/**
 * 1. Loop string
 * 2. Push opening bracket to stack
 * 3. If closing bracket, check if stack is empty or not, if empty return false, if not and it matches with opening bracket, pop from stack
 * 4. If stack is empty at the end, return true
 * 5. Else return false
 */

function isParenthesesValid(s: string) {
  // Create an empty stack
  const stack: string[] = [];

  // Loop through the string

  for (let i = 0; i < s.length; i++) {
    // If is opening brackets, push into the stack
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    }

    if (s[i] === ")" || s[i] === "]" || s[i] === "}") {
      if (stack.length === 0) return false;

      const lastEle = stack.pop();

      if (
        (s[i] === ")" && lastEle !== "(") ||
        (s[i] === "]" && lastEle !== "[") ||
        (s[i] === "}" && lastEle !== "{")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isParenthesesValid("()[]{}"));
console.log(isParenthesesValid("()[]{}}"));
console.log(isParenthesesValid("(([{}]))"));
