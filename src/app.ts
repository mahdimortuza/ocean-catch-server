import cors from "cors";
import express, { Request, Response } from "express";
import router from "./app/route";
const app = express();

// parsers
app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

const response = "Hello World!";
app.get("/", (req: Request, res: Response) => {
  res.send(response);
});

export default app;