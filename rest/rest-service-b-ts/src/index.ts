import express, { Express, Request, Response } from "express";
import { getConfig } from "./config";

const app: Express = express();
app.use(express.json());
const config = getConfig();

type RequestBody = {
  message: string;
};

type ResponseBody = {
  out: string;
};

app.post("/hello", (req: Request, res: Response) => {
  const body: RequestBody = req.body;

  const responseBody: ResponseBody = {
    out: `${body.message}; from service B!`,
  };

  res.json(responseBody);
});

app.listen(config.port, () => {
  console.log(`⚡️[server]: Server is running at port ${config.port}`);
});
