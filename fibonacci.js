console.log(123);
  function outputFibonacciNumber(inputArray) {
    let tempArray = [];
    let outputNumber = [];
    inputArray.forEach((inputNumber) => {
      if (tempArray.length == 0) {
        tempArray = this.runFibonacciArray(inputNumber);
        outputNumber.push(tempArray[tempArray.length - 1]);
      } else if (inputNumber > tempArray[tempArray.length - 1]) {
        tempArray = this.runFibonacciArray(inputNumber);
        outputNumber.push(tempArray[tempArray.length - 1]);
      } else {
        outputNumber.push(this.selectValueInFibonacciArray(tempArray, inputNumber));
      }
    });
    // console.log(tempArray);
    console.log("Output:" + outputNumber);
  }


  function runFibonacciArray(inputNumber) {
    let fArray = [1, 1];
    let i = 2;
    while (inputNumber >= fArray[fArray.length - 1]) {
      fArray[i] = fArray[i - 1] + fArray[i - 2];
      i++;
    }
    return fArray;
  }

  function selectValueInFibonacciArray(fibonacciArray, inputNumber) {
    let i = 1;
    let result = 0;
    while (inputNumber > fibonacciArray[i-1]) {
      result = fibonacciArray[i];
      i++;
    }
    return result;
  }
