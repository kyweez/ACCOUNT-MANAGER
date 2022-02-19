import express from "express";
import cors from "cors";
import logger from "./src/utils/logger";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use((req, res, next) => {
  logger.http(
    `[${req.ip}] received : ${req.method} ${
      req.originalUrl
    } (Authorization: ${req.get("Authorization")})`
  );
  next();
});

app.listen(PORT, () => {
  console.log(`The application is running on port ${PORT}`);
});
