import "module-alias/register";
import { IService } from "./util/shared/IService";
import express from "express";

class App {
  app: express.Application;
  constructor(c: IService[]) {
    this.app = express();
    this.registerController(c);
  }

  private registerController(c: IService[]) {
    c.forEach(_ct => {
      this.app.use("/", _ct.router);
    });
  }

  public listen() {
    this.app.listen(3000, () => {});
  }
}

export default App;
