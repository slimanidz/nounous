// import auth from "@/api/auth"

import User from "../../../src/api/db/models/User";
import hashPassword from "../../../src/hashPassword";

const userIdRoutes = async (req, res) => {
  if (req.method === "GET") {
    const {
      query: { userId },
    } = req;

    const [user] = await User.query().where({ id: userId }).returning("*");

    if (!user) {
      res.status(200).send("Ok");

      return;
    }

    res.status(200).send({ result: user });
  }

  if (req.method === "PUT") {
    const {
      query: { nounouId },
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
    console.log(nounouId);
    console.log(password);

    const [user] = await User.query().where({ email: nounouId });
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
      .where({ email: nounouId })
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
      query: { userId },
    } = req;

    console.log(userId);

    const user = await User.query().deleteById(userId).returning("*");

    if (!user) {
      res.status(404).send({ error: "Erreur. Aucun utilisateur pour cet ID." });
    }

    res.status(200).send({ result: user });
  }
};

export default userIdRoutes;
