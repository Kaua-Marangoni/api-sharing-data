import express from "express"
import routes from "./routes"
import cors from "cors"

class App {
  constructor() {
    this.app = express()
    this.app.use(cors())

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.json())
  }

  routes() {
    this.app.use(routes)
  }
}

export default new App().app
