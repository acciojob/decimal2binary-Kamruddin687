function decimalToBinary(num) {
  //Write you code here
	if (isNaN(decimalNumber) || decimalNumber < 0) {
    return "Invalid input";
  }

  if (decimalNumber === 0) {
    return "0";
  }

  let binary = "";
  while (decimalNumber > 0) {
    binary = (decimalNumber % 2) + binary;
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  return binary;
}

// Example usage:
const decimalNumber = 7; // Replace with your desired decimal number
const binaryRepresentation = decimalToBinary(decimalNumber);
console.log(`Binary representation of ${decimalNumber} is: ${binaryRepresentation}`);
This decimalToBinary function takes a decimal number as input and returns its binary representation as a string. It first checks if the input is valid (a non-negative number) and then uses a loop to calculate the binary representation. It continues to divide the decimal number by 2 and keeps track of the remainders until the decimal number becomes 0.

Remember to replace decimalNumber with the number you want to convert.






  
}

window.decimalToBinary = decimalToBinary;
