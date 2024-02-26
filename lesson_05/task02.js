const modString = (str) => {
  const firstLetter = str[0].slice().toUpperCase();
  return firstLetter + str.slice(1).toLowerCase();
}

console.log(modString('привет, МИР'));