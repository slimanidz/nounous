// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

const usersRoutes = async (req, res) => {
  if (req.method === "GET") {
    res.status(200).send({ result: "users" });
  }

  if (req.method === "POST") {
    res.status(200).send({ hello: "Hello" });
  }
};

export default usersRoutes;
