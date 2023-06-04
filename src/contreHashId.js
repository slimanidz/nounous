const ContreHashId = (hashIdd) => {
  const tableIdd = [];

  for (let i = 0; i < hashIdd.length - 1; i++) {
    tableIdd.push(hashIdd.charAt(i));
  }

  const hashTable = tableIdd.map((id) => {
    if (id === "a") {
      return "0";
    } else if (id === "&") {
      return "1";
    } else if (id === "b") {
      return "2";
    } else if (id === "?") {
      return "3";
    } else if (id === "c") {
      return "4";
    } else if (id === "d") {
      return "5";
    } else if (id === "e") {
      return "6";
    } else if (id === "f") {
      return "7";
    } else if (id === "h") {
      return "8";
    } else if (id === "i") {
      return "9";
    }
  });
  const hashId = +hashTable.join("");

  return hashId;
};

module.exports = ContreHashId;
