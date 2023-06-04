// import auth from "@/api/auth"

import User from "../../../../src/api/db/models/User";

const userEmailRoutes = async (req, res) => {
  if (req.method === "GET") {
    const {
      query: { userEmail },
    } = req;

    // get par email
    console.log("hello2");
    const [user] = await User.query()
      .where({ email: userEmail })
      .select("id", "email", "username", "telephone");

    if (!user) {
      res.status(200).send("Ok");

      return;
    }

    res.send({ result: user });
  }
};

export default userEmailRoutes;
