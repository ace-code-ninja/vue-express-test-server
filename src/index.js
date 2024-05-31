import express, { Application } from "express"
import Server from "./src/index"

const app = express()
const server = new Server(app)
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080

app
  .listen(PORT, "localhost", function () {
    console.log(`Server is running on port ${PORT}.`)
  })
  .on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.log("Error: address already in use")
    } else {
      console.log(err)
    }
  })
