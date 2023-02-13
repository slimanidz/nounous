import jsonwebtoken from "jsonwebtoken";
import config from "../../src/api/config";
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
      res.send({ error: "erreur dans l'email ou le mot de passe" });

      return;
    }
    console.log(user);
    const jwt = jsonwebtoken.sign(
      {
        payload: {
          id: user.id,
          username: user.username,
          email: user.email,
          talephone: user.telephone,
          role: user.role,
        },
      },
      config.security.session.jwtSecret,
      { expiresIn: config.security.session.expiresIn }
    );
    console.log(jwt);
    res.send({ result: [{ jwt }] });
  }
};

export default handler;
