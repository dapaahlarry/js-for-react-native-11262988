function processArray(arr) {
    const modifiedArray = [];

    for (const num of arr) {
      // Check if the number is even
      if (num % 2 === 0) {
        // Square the even number
        modifiedArray.push(num * num);
      } else {
        // Triple the odd number
        modifiedArray.push(num * 3);
      }
    }

    return modifiedArray;
  }

  
// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const processedArray = processArray(originalArray);
console.log(processedArray); 


function formatArrayStrings(stringArr, numberArr) {
    const formattedStrings = [];
    for (let i = 0; i < stringArr.length; i++) {
    const str = stringArr[i];
    const num = numberArr[i];

    if (num % 2 === 0) {
        formattedStrings.push(str.toUpperCase());
    } else {
        formattedStrings.push(str.toLowerCase());
    }
    }
    return formattedStrings;
}


const stringArray = ["hello", "world", "!how", "are"];
const formattedArray = formatArrayStrings(stringArray, processedArray);
console.log(formattedArray); 