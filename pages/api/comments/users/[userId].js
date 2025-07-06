import Comment from "../../../../src/api/db/models/Comment";

const CommentUserId = async (req, res) => {
  if (req.method === "GET") {
    const {
      query: { userId },
    } = req;

    const comments = await Comment.query()
      .where({ userId: userId })
      .returning("*");

    if (!comments) {
      res.status(200).send("Ok");

      return;
    }

    res.status(200).send({ result: comments });
  }
};
export default CommentUserId;
