function calculate(expression) {
  // Split the expression into tokens
  const tokens = expression.split(' ');
  
  // Initialize a stack to hold operands
  const stack = [];
  
  // Loop through each token
  for (let token of tokens) {
      // If token is an operator, pop two operands from stack, perform operation, and push result back to stack
      if (token === '+') {
          const operand2 = stack.pop();
          const operand1 = stack.pop();
          stack.push(operand1 + operand2);
      } else if (token === '-') {
          const operand2 = stack.pop();
          const operand1 = stack.pop();
          stack.push(operand1 - operand2);
      } else if (token === '*') {
          const operand2 = stack.pop();
          const operand1 = stack.pop();
          stack.push(operand1 * operand2);
      } else if (token === '/') {
          const operand2 = stack.pop();
          const operand1 = stack.pop();
          stack.push(operand1 / operand2);
      } else {
          // Token is an operand, push it to the stack
          stack.push(parseFloat(token));
      }
  }
  
  // At the end, the stack should contain only one element, which is the result
  return stack.pop();
}

export default { calculate };
