import Express from "express";
import cors from "cors";
import { notFound } from "./middlewares/notFound";
import taskRouter from "./routes/taskRoute";
import 'dotenv/config';
import './config/DatabaseConnect';

class App{
  public server: Express.Application = Express();
  readonly PORT = process.env.PORT

  constructor(){
    this.server;
    this.init();
    this.router();
    this.middleware();
  }

  private middleware(){
    this.server.use(notFound);
  }

  private router(){
    this.server.use(taskRouter);
  }

  private init(){
    this.server.use(Express.json());
    this.server.use(cors());
    this.server.listen(this.PORT, () => console.log(`app runnning on port ${this.PORT}`));
  }
  
}

new App();

