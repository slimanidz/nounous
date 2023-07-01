import mg from "mailgun-js";
import hashId from "../../src/hashId";

export default function handler(req, res) {
  const { email, id } = req.body;
  const idString = String(id);
  const hashid = hashId(idString);

  const mailgun = () =>
    mg({
      apiKey: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMIAN,
    });
  mailgun()
    .messages()
    .send(
      {
        from: "mslimani1983@gmail.com",
        to: `${email}`,
        subject: `Password Forget`,
        html: `
        <h1>Merci d'avoir choisi Nounous.
        <p> Pour réinitialiser votre mot de passe clic <a href='http://localhost:3000/patch-password/${hashid}'> ICI</a></p></h1>`,
      },
      (error, body) => {
        if (error) {
          // eslint-disable-next-line no-console
          console.log(error);
          res.status(500).send({ message: "Error in sending email" });
        } else {
          // eslint-disable-next-line no-console
          console.log(body);
          res.send({ message: "Email sent successfully" });
        }
      }
    );
}
