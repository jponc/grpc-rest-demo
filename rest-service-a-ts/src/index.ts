import axios from "axios";
import express, { Express, Request, Response } from "express";
import { getConfig } from "./config";

const app: Express = express();
app.use(express.json());
const config = getConfig();

type RequestBody = {
  name: string;
};

type ServiceBResponse = {
  out: string;
};

app.post("/hello", (req: Request, res: Response) => {
  const body: RequestBody = req.body;

  (async () => {
    const serviceBRes = await axios.post(`${config.serviceBHost}/hello`, {
      message: `Hello ${body.name} from service A`,
    });

    const serviceBResBody = serviceBRes.data as ServiceBResponse;

    res.json({
      ret: `${serviceBResBody.out} ... Done`,
    });
  })();
});

app.listen(config.port, () => {
  console.log(`⚡️[server]: Server is running at port ${config.port}`);
});
