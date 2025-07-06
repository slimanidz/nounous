// import auth from "@/api/auth"

import Nounou from "../../../src/api/db/models/Nounou";
import hashPassword from "../../../src/hashPassword";

const userIdRoutes = async (req, res) => {
  if (req.method === "GET") {
    const {
      query: { adresse },
    } = req;

    const nounous = await Nounou.query()
      .where({ localite: adresse })
      .returning("*");

    if (!nounous) {
      res.status(200).send("Ok");

      return;
    }

    res.status(200).send({ result: nounous });
  }

  if (req.method === "PUT") {
    const {
      query: { adresse },
      body: {
        // firstName,
        // lastName,
        // email,
        password,
        // gender,
        // ageCategory,
        // salaryCategory,
        // professionalCategory,
        // politicalPartyId,
      },
    } = req;
    ////////////////////////
    console.log(adresse);
    console.log(password);

    const [user] = await User.query().where({ email: adresse });
    console.log(user);

    if (!user) {
      res.status(404).send({ error: ["User not found."] });

      return;
    }

    let passwordHash;
    let passwordSalt;

    if (password) {
      const { hash, salt } = hashPassword(password);

      passwordHash = hash;
      passwordSalt = salt;
    }
    ///////////////////////

    const ubdateuser = await User.query()
      .where({ email: adresse })
      // .patchAndFetchById(id, {
      .update({
        // firstName,
        // lastName,
        // email,
        passwordHash,
        passwordSalt,
        // gender,
        // ageCategory,
        // salaryCategory,
        // professionalCategory,
        // politicalPartyId,
      });

    if (!ubdateuser) {
      res
        .status(404)
        .send({ error: "Abandon. Aucun utilisateur pour cet ID." });

      return;
    }

    res.status(200).send({ result: ubdateuser });
  }

  if (req.method === "DELETE") {
    const {
      params: { id },
    } = req;

    const user = await User.query().deleteById(id).returning("*");

    if (!user) {
      res.status(404).send({ error: "Erreur. Aucun utilisateur pour cet ID." });
    }

    res.status(200).send(user);
  }
};

export default userIdRoutes;
