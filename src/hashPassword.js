const { pbkdf2Sync, randomBytes } = require("crypto");

const hashPassword = (
  password,
  salt = randomBytes(32).toString("hex"),
  iteration = 100000,
  keylen = 256,
  digest = "sha512"
) => {
  const hash = pbkdf2Sync(password, salt, iteration, keylen, digest).toString(
    "hex"
  );

  return { salt, hash };
};

module.exports = hashPassword;
