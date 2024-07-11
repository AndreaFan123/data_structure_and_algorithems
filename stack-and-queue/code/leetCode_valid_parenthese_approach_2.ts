// Using Object

function isParenthesesValid(s: string) {
  const stack: string[] = [];
  const parisBrackets: { [key: string]: string } = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    const bracket = s[i];
    if (bracket === "(" || bracket === "[" || bracket === "{") {
      stack.push(bracket);
    }

    if (bracket === ")" || bracket === "]" || bracket === "}") {
      if (stack.length === 0 || stack.pop() !== parisBrackets[bracket]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isParenthesesValid("()[]{}"));
console.log(isParenthesesValid("()[]{}}"));
console.log(isParenthesesValid("(([{}]))"));
