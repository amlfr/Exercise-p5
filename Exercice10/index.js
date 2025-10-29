//votre code ici

const printNumbers = (n) => {
  let str = '';
  for (let i = 0; i < n; i++) {
    if (i > 0) {
      str += ' ';
    }
    str += i + 1;
  }
  return str;
};

export default printNumbers;
