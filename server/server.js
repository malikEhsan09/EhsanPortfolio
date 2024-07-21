import cors from "cors";
import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: ["http://localhost:3000", "https://ehsan-portfolio-umber.vercel.app"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post("/send", async (req, res) => {
  const { from_email, from_name, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL || "ehsanahmed122001@gmail.com", // Your email
      pass: process.env.PASSWORD || "grri kvll miqu wqif", // Your email password
    },
  });

  const mailOptions = {
    from: from_email,
    to: process.env.EMAIL || "ehsanahmed122001@gmail.com", // Your email where you want to receive messages
    subject: `${subject} `,
    text: `You have received a new message from ${from_name} (${from_email}):\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error); // Log the error details
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
