import Comment from "../../src/api/db/models/Comment";

const commentsRoutes = async (req, res) => {
  if (req.method === "GET") {
    const comments = await Comment.query();

    if (!comments) {
      res.status(404).send({ error: "Erreur. Aucun résultat." });

      return;
    }
    const [{ count }] = await Comment.query().count();
    res.status(200).send({ result: comments, count });
  }

  if (req.method === "POST") {
    const {
      body: { content, userId, nounouId },
    } = req;

    const comment = await Comment.query()
      .insert({
        content,
        userId,
        nounouId,
      })
      .returning("*");

    res.status(200).send({ result: comment });
  }
};

export default commentsRoutes;
