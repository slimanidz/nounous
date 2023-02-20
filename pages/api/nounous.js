import Nounou from "../../src/api/db/models/Nounou";
import hashPassword from "../../src/hashPassword";
// import hashPassword from "../../src/hashPassword";

const nounousRoutes = async (req, res) => {
  // if (!auth(req, res)) {
  //   return
  // }

  if (req.method === "GET") {
    const nounous = await Nounou.query();
    // const nounous = await db("nounous");

    if (!nounous) {
      res.status(404).send({ error: "Erreur. Aucun résultat." });

      return;
    }

    res.status(200).send({ result: nounous });
  }

  if (req.method === "POST") {
    const {
      body: {
        email,
        username,
        telephone,
        localite,
        situation,
        // image,
        password,
      },
    } = req;
    if (email === null || email === "") {
      res.status(400).send({ error: "Erreur. Champs email obligatoire." });
      return;
    }
    const { hash, salt } = hashPassword(password);
    const nounou = await Nounou.query()
      .insert({
        email,
        username,
        telephone,
        localite,
        situation,
        // image,
        passwordHash: hash,
        passwordSalt: salt,
      })
      .returning("*");
    res.status(200).send({ result: nounou });
  }
};

export default nounousRoutes;
