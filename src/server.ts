import Express from "express";
import cors from "cors";
import 'dotenv/config';
import './config/DatabaseConnect';

export class App{
  public server: Express.Application = Express();
  readonly PORT = process.env.PORT

  constructor(){
    this.server;
    this.middleware();
    this.init();
  }

  private middleware(){
    this.server.use(Express.json());
    this.server.use(cors());
  }

  public init(){
    this.server.listen(this.PORT, () => console.log(`app runnning on ${this.PORT}`));
  }
  
}
