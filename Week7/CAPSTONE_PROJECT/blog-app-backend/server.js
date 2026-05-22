import exp from "express";
import { config } from "dotenv";
import { connect } from "mongoose";
import { userApp } from "./apis/user-api.js";
import { authorApp } from "./apis/author-api.js";
import { adminApp } from "./apis/admin-api.js";
import { commonApp } from "./apis/common-api.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = exp();
config();

app.get("/health", (req, res) => res.send("OK"));

const allowedOrigins = [
  "http://localhost:5173",
  "https://blog-app-j39-hxv2qg13v-kaustubhs-projects-193f3136.vercel.app/"
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (mobile apps/postman)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);app.use(cookieParser());
app.use(exp.json());

//path level middleware
app.use("/user-api", userApp);
app.use("/author-api", authorApp);
app.use("/admin-api", adminApp);
app.use("/auth", commonApp);

//Connect to DB
const connectDB = async () => {
  try {
    await connect(process.env.DB_URL);
    console.log("DB Connected");
  } catch (err) {
    console.log("Error in DB Connect", err);
  }
};
connectDB();

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`server listening on ${port}`));

//to handle invalid path
app.use((req, res, next) => {
  console.log(req.url);
  res.status(404).json({ message: `path ${req.url} is invalid` });
});

//To handle errors
app.use((err, req, res, next) => {
  console.log(err.name);
  console.log(err);
  //ValidationError
  if (err.name === "ValidationError") {
    return res
      .status(400)
      .json({ message: "Error occured", error: err.message });
  }
  //CastError
  if (err.name === "CastError") {
    return res
      .status(400)
      .json({ message: "Error occured", error: err.message });
  }
  //Send server side errors
  res.status(500).json({ message: "Error occured", error: err.message });
});
