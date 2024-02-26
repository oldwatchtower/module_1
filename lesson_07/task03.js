const addPrefix = (arr, str) => {
  return arr.map((item) => {
    return `${str} ${item}`;
  });
}

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

console.log(addPrefix(names, 'Mr'))