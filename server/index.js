const creds = require("./nodemon.json");
const axios = require("axios");

let express = require("express");
let app = express();
let nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const path = require("path");
const router = express.Router();

// Static folder
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  // service: 'Gmail',
  auth: {
    user: creds.auth.user, //creds.auth.user,
    pass: creds.auth.pass, //"bcvzcjrobjjgfqnq", // creds.auth.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

app.post("/mail", (req, res, next) => {
  var email = req.body.email;
  var subject = req.body.subject;
  var name = req.body.name;
  var company = req.body.company;

  const mailOptions = {
    from: name,
    to: email,
    subject: subject,
    html: `

    <h3>Information</h3>
    <ul>
    <li>Name:  ${name}</li>
    <li>Email:  ${email}</li>
    <li>Phone No:  ${company}</li>
    </ul>
    <h3>Message</h3>
    <p>${subject}</p>

    `,
    // ${name} from ${company} <noreply@${name}.com> <br /><br /> ${subject}
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.json({
        status: "err",
      });
      console.log(err);
    } else {
      res.json({
        status: "success",
      });
      console.log("Email Sent" + data.response);
    }
  });
});

app.post("/api", (req, res, next) => {
  var email = req.body.email;
  var subject = req.body.subject;
  var name = req.body.name;

  const mailOptions = {
    from: name,
    to: email,
    subject: subject,
    html: `

    <h3>Information</h3>
    <ul>
    <li>Name:  ${name}</li>
    <li>Email:  ${email}</li>
    <li>Phone No:  ${subject}</li>
    </ul>


    `,
    // ${name} from ${company} <noreply@${name}.com> <br /><br /> ${subject}
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.json({
        status: "err",
      });
      console.log(err);
    } else {
      res.json({
        status: "success",
      });
      console.log("Email Sent" + data.response);
    }
  });
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages!");
  }
});

router.post("/signup-with-recaptcha", async (req, res, next) => {
  if (!req.body.token) {
    return res.status(400).json({ error: "reCaptcha token is missing" });
  }

  try {
    const googleVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=6LemmnEcAAAAAP1lN6V3Df2wUmJG0OrpKgZkTyeK&response=${req.body.token}`;
    const response = await axios.post(googleVerifyUrl);
    const { success } = response.data;
    if (success) {
      //Do sign up and store user in database
      return res.json({ success: true });
    } else {
      return res.status(400).json({ error: "Invalid Captcha. Try again." });
    }
  } catch (e) {
    return res.status(400).json({ error: "reCaptcha error." });
  }
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// serve PORT running here
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.info(`server has started on ${PORT}`));
