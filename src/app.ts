import express, { Request, Response } from "express"
import { logger } from "./util/Looger"
import morgan from "morgan"

import './Queue/worker'
import { mailQueue } from "./Queue/queue"

const app = express()

app.use(express.json())
app.use(morgan("dev"))

app.get("/", (req:Request, res:Response) => {
  res.send("Hello World")
})

app.post("/send-email", async (req:Request, res:Response) => {
  try {
    await mailQueue.add('sendEmail', { email: 'iKo7d@example.com' });
    res.status(200).send("Email job added to the queue");
  } catch (error) {
    logger.error(`Failed to add email job: ${error}`);
    res.status(500).send("Failed to add email job");
  }
})

app.listen(3000, () => {
 logger.info("Server is running on port localhost:3000")
})