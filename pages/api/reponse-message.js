import ReponseMessage from "../../src/api/db/models/ReponseMessage";

const reponseMessagesRoutes = async (req, res) => {
  // if (!auth(req, res)) {
  //   return
  // }

  if (req.method === "GET") {
    const Reponsemessages = await ReponseMessage.query();

    if (!Reponsemessages) {
      res.status(404).send({ error: "Erreur. Aucun résultat." });

      return;
    }

    res.status(200).send({ result2: Reponsemessages });
  }

  if (req.method === "POST") {
    const {
      body: { content, messageId },
    } = req;
    const Reponsemessage = await ReponseMessage.query()
      .insert({
        content,
        messageId,
      })
      .returning("*");

    res.status(200).send({ result: Reponsemessage });
  }
};

export default reponseMessagesRoutes;
