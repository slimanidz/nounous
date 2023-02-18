import User from "../../src/api/db/models/User";
import hashPassword from "../../src/hashPassword";

const usersRoutes = async (req, res) => {
  // if (!auth(req, res)) {
  //   return
  // }

  if (req.method === "GET") {
    const users = await User.query();

    if (!users) {
      res.status(404).send({ error: "Erreur. Aucun résultat." });

      return;
    }
    const [{ count }] = await User.query().count();

    res.status(200).send({ result: users, count });
  }

  if (req.method === "POST") {
    const {
      body: { email, username, telephone, password },
    } = req;
    const { hash, salt } = hashPassword(password);
    const user = await User.query()
      .insert({
        email,
        username,
        telephone,
        passwordHash: hash,
        passwordSalt: salt,
      })
      .returning("*");
    if (email === null || email === "") {
      res.status(400).send({ error: "Erreur. Champs email obligatoire." });
      return;
    }
    res.status(200).send({ result: user });
  }
};

export default usersRoutes;
