import Express from "express";
import cors from "cors";
import { notFound } from "./middlewares/notFound";
import taskRouter from "./routes/taskRoute";
import 'dotenv/config';
import './database/config/DatabaseConnect';

class App{
  
  private server: Express.Application;
  private readonly PORT;

  constructor(){
    this.server = Express();
    this.PORT = process.env.PORT as string || 3000
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

