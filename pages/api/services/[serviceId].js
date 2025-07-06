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
      body: {
        service1,
        service2,
        service3,
        service4,
        service5,
        service6,
        service7,
        service8,
        nounouId,
      },
    } = req;
    ////////////////////////
    console.log(nounouId);

    const [service] = await Service.query()
      .where({ nounouId: nounouId })
      .update({
        service1,
        service2,
        service3,
        service4,
        service5,
        service6,
        service7,
        service8,
        nounouId,
        updatedAt: new Date(),
      })
      .returning("*");
    console.log(service);

    if (!service) {
      res.status(404).send({ error: ["User not found."] });

      return;
    }

    ///////////////////////

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
