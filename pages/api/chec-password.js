import User from "../../src/api/db/models/User";
import hashPassword from "../../src/hashPassword";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const {
      body: { email, password },
    } = req;
    console.log({ email, password });

    const user = await User.query().findOne({ email });
    const { hash, salt } = user
      ? hashPassword(password, user.passwordSalt)
      : false;
    if (!user || !{ hash, salt } || user.passwordHash !== hash) {
      res.send({
        error: "Oooops! erreur dans l'email ou le mot de passe",
      });

      return;
    }

    res.send({ resultchec: user });
  }
};

export default handler;
