// import auth from "@/api/auth"

import Message from "../../../src/api/db/models/Message";
import hashPassword from "../../../src/hashPassword";

const messageIdRoutes = async (req, res) => {
  if (req.method === "GET") {
    const {
      query: { messageId },
    } = req;

    const messages = await Message.query()
      .where({ nounouId: messageId })
      .returning("*");

    if (!messages) {
      res.status(200).send("Ok");

      return;
    }
    console.log(messages);
    res.status(200).send({ result1: messages });
  }

  if (req.method === "PUT") {
    const {
      query: { messageId },
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
    console.log(messageId);
    console.log(password);

    const [user] = await User.query().where({ email: messageId });
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
      .where({ email: messageId })
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

export default messageIdRoutes;
