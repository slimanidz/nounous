const hashId = (id) => {
  const tableId = [];

  const hash = id.toString();
  for (let i = 0; i < hash.length; i++) {
    tableId.push(hash.charAt(i));
  }

  const random = String(Math.floor(Math.random() * (9 - 0) + 0));

  tableId.push(random);

  const hashTable = tableId.map((id) => {
    if (id === "0") {
      return "a";
    } else if (id === "1") {
      return "&";
    } else if (id === "2") {
      return "b";
    } else if (id === "3") {
      return "?";
    } else if (id === "4") {
      return "c";
    } else if (id === "5") {
      return "d";
    } else if (id === "6") {
      return "e";
    } else if (id === "7") {
      return "f";
    } else if (id === "8") {
      return "h";
    } else if (id === "9") {
      return "i";
    }
  });

  const hashId = hashTable.join("");

  return hashId;
};

module.exports = hashId;
