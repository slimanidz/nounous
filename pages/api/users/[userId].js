// import auth from "@/api/auth"

import User from "../../../src/api/db/models/User";
import hashPassword from "../../../src/hashPassword";

const userIdRoutes = async (req, res) => {
  if (req.method === "GET") {
    const {
      query: { userId },
    } = req;
    console.log(userId);
    if (typeof userId === "number") {
      const [user] = await User.query().where({ id: userId }).returning("*");

      if (!user) {
        res.status(200).send("Ok");

        return;
      }

      res.status(200).send({ result: user });
      return;
    }

    // get par email

    const [user] = await User.query()
      .where({ email: userId })
      .select("id", "email", "username");

    if (!user) {
      res.status(200).send("Ok");

      return;
    }

    res.send({ result: user });
  }

  ////// PATCH

  if (req.method === "PATCH") {
    const {
      query: { userId },
      body: { email1, username1, telephone1 },
    } = req;

    console.log({ userId, email1, username1, telephone1 });

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

    const [user] = await User.query().where({ email: userId });

    if (!user) {
      res.status(404).send({ error: ["User not found."] });

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
      const [updatedUser] = await User.query()
        .where({ email: userId })
        // User.query().findById(userId)
        .update({
          email,
          username,
          telephone,
          // passwordHash,
          // passwordSalt,
          updatedAt: new Date(),
        })
        .returning("*");

      res.send({ result: [updatedUser] });
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

  /////// PUT

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
