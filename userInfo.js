const { processedArray } = require('./arrayManipulation.js'); 
function createUserProfiles(names) {
  let id = 1; 
  const userProfiles = [];

  for (const name of names) {
    const modifiedName = processedArray.find(modifiedName => names.indexOf(name) === processedArray.indexOf(modifiedName));

    userProfiles.push({
      originalName: name,
      modifiedName: modifiedName,
      id: id++,
    });
  }

  return userProfiles;
}

module.exports = createUserProfiles;


// Example  
const names = ["Peter", "Bob", "Travis"];
const createUserProfiles = require('./userInfo.js');

const userProfiles = createUserProfiles(names);
console.log(userProfiles);