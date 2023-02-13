// import auth from "@/api/auth"

import Comment from "../../../src/api/db/models/Comment";
import hashPassword from "../../../src/hashPassword";

const userIdRoutes = async (req, res) => {
  if (req.method === "GET") {
    const {
      query: { commentId },
    } = req;

    const comment = await Comment.query()
      .where({ nounouId: commentId })
      .returning("*");

    if (!comment) {
      res.status(200).send("Ok");

      return;
    }

    res.status(200).send({ result1: comment });
  }

  if (req.method === "PUT") {
    const {
      query: { commentId },
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
    console.log(commentId);
    console.log(password);

    const [user] = await User.query().where({ email: commentId });
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
      .where({ email: commentId })
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
