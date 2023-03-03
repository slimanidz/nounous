import Nounou from "../../src/api/db/models/Nounou";
import hashPassword from "../../src/hashPassword";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const {
      body: { email, password },
    } = req;
    console.log({ email, password });

    const nounou = await Nounou.query().findOne({ email });
    const { hash, salt } = nounou
      ? hashPassword(password, nounou.passwordSalt)
      : false;
    if (!nounou || !{ hash, salt } || nounou.passwordHash !== hash) {
      res.send({
        error: "Oooops! erreur dans l'email ou le mot de passe",
      });

      return;
    }

    res.send({ resultChecNounou: nounou });
  }
};

export default handler;
