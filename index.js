// Helper function to find the maximum number in an array
function findMaxNumber(numbers) {
    return Math.max(...numbers);
  }
  
  // Example of usage:
  const numberArray = [10, 5, 8, 15, 3];
  const maxNumber = findMaxNumber(numberArray);
  console.log(`The maximum number is: ${maxNumber}`);