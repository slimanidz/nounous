// import auth from "@/api/auth"

import Service from "../../../src/api/db/models/Service";
import hashPassword from "../../../src/hashPassword";

const userIdRoutes = async (req, res) => {
  if (req.method === "GET") {
    const {
      query: { serviceId },
    } = req;

    const service = await Service.query()
      .where({ nounouId: serviceId })
      .returning("*");

    if (!service) {
      res.status(200).send("Ok");

      return;
    }

    res.status(200).send({ result1: service });
  }

  if (req.method === "PUT") {
    const {
      query: { serviceId },
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
    console.log(serviceId);
    console.log(password);

    const [user] = await User.query().where({ email: serviceId });
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
      .where({ email: serviceId })
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
