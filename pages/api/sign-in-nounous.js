import jsonwebtoken from "jsonwebtoken";
import config from "../../src/api/config";
import Nounou from "../../src/api/db/models/Nounou";
import hashPassword from "../../src/hashPassword";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const {
      body: { email, password },
    } = req;

    const nounou = await Nounou.query().findOne({ email });
    const { hash, salt } = nounou
      ? hashPassword(password, nounou.passwordSalt)
      : false;
    if (!nounou || !{ hash, salt } || nounou.passwordHash !== hash) {
      res.send({ error: "erreur dans l'email ou le mot de passe" });

      return;
    }

    const jwt = jsonwebtoken.sign(
      {
        payload1: {
          id: nounou.id,
          username: nounou.username,
          email: nounou.email,
          talephone: nounou.telephone,
          localite: nounou.localite,
          situation: nounou.situation,
        },
      },
      config.security.session.jwtSecret,
      { expiresIn: config.security.session.expiresIn }
    );
    res.send({ result: [{ jwt }] });
  }
};

export default handler;
