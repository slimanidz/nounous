import Message from "../../src/api/db/models/Message";
// import hashPassword from "../../src/hashPassword";

const messagesRoutes = async (req, res) => {
  // if (!auth(req, res)) {
  //   return
  // }

  if (req.method === "GET") {
    const messages = await Message.query();
    // const messages = await db("messages");

    if (!messages) {
      res.status(404).send({ error: "Erreur. Aucun résultat." });

      return;
    }

    res.status(200).send({ result: messages });
  }

  if (req.method === "POST") {
    const {
      body: { content, userId, nounouId },
    } = req;
    const message = await Message.query()
      .insert({
        content,
        userId,
        nounouId,
      })
      .returning("*");

    res.status(200).send({ result: message });
  }
};

export default messagesRoutes;
