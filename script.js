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







  
}

window.decimalToBinary = decimalToBinary;
