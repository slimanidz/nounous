// import auth from "@/api/auth"

import Nounou from "../../../src/api/db/models/Nounou";
import hashPassword from "../../../src/hashPassword";

const userIdRoutes = async (req, res) => {
  if (req.method === "GET") {
    const {
      query: { nounouId },
    } = req;

    const [nounou] = await Nounou.query()
      .where({ id: nounouId })
      .returning("*");

    if (!nounou) {
      res.status(200).send("Ok");

      return;
    }

    res.status(200).send({ result: nounou });
  }

  ////// PATCH

  if (req.method === "PATCH") {
    const {
      query: { nounouId },
      body: { email1, username1, telephone1 },
    } = req;

    console.log({ nounouId, email1, username1, telephone1 });

    const object = [email1, username1, telephone1].map((item) => {
      if (item === "") {
        return undefined;
      }

      return item;
    });
    const email = object[0];
    const username = object[1];
    const telephone = object[2];
    // const password = object[3];

    const [nounou] = await Nounou.query().where({ email: nounouId });

    if (!nounou) {
      res.status(404).send({ error: ["Nounou not found."] });

      return;
    }

    // let passwordHash;
    // let passwordSalt;

    // if (password) {
    //   const [hash, salt] = hashPassword(password);

    //   passwordHash = hash;
    //   passwordSalt = salt;
    // }

    try {
      const [updatedNounou] = await Nounou.query()
        .where({ email: nounouId })
        // Nounou.query().findById(nounouId)
        .update({
          email,
          username,
          telephone,
          // passwordHash,
          // passwordSalt,
          updatedAt: new Date(),
        })
        .returning("*");

      res.send({ result: [updatedNounou] });
    } catch (err) {
      if (err.code === "23505") {
        res.status(409).send({
          error: [
            `Duplicated value for "${err.detail.match(/^Key \((\w+)\)/)[1]}"`,
          ],
        });

        return;
      }

      // eslint-disable-next-line no-console
      console.error(err);

      res.status(500).send({ error: "Oops. Something went wrong." });
    }
  }

  ///////////////////////////////////////////////////////////////////////

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

    const [nounou] = await Nounou.query().where({ email: nounouId });
    console.log(nounou);

    if (!nounou) {
      res.status(404).send({ error: ["Nounou not found."] });

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

    const ubdateuser = await Nounou.query()
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
      query: { nounouId },
    } = req;

    console.log(nounouId);

    const nounou = await Nounou.query().deleteById(nounouId).returning("*");

    if (!nounou) {
      res.status(404).send({ error: "Erreur. Aucun utilisateur pour cet ID." });
    }

    res.status(200).send({ result: nounou });
  }
};

export default userIdRoutes;
