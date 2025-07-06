import Service from "../../src/api/db/models/Service";

const usersRoutes = async (req, res) => {
  // if (!auth(req, res)) {
  //   return
  // }

  if (req.method === "GET") {
    const services = await Service.query();
    // const services = await db("services");

    if (!services) {
      res.status(404).send({ error: "Erreur. Aucun résultat." });

      return;
    }

    res.status(200).send({ result: services });
  }

  if (req.method === "POST") {
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

    const service = await Service.query()
      .insert({
        service1,
        service2,
        service3,
        service4,
        service5,
        service6,
        service7,
        service8,
        nounouId,
      })
      .returning("*");

    res.status(200).send({ result1: service });
  }
  if (req.method === "PATCH") {
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

    if (!service) {
      res.status(404).send({ error: ["User not found."] });

      return;
    }

    ///////////////////////

    res.status(200).send({ result: service });
  }
};

export default usersRoutes;
