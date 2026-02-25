import express, { Request, Response } from "express"
import { logger } from "./util/Looger"

const app = express()

app.get("/", (req:Request, res:Response) => {
  res.send("Hello World")
})

app.listen(3000, () => {
 logger.info("Server is running on port 3000")
})