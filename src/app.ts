import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import Routes from './controllers';

class App {

  public app: express.Application = express();
  public routes: Routes;
  public mongoUrl: string = 'mongodb://localhost:27017/customers_db';

  constructor() {
    this.config();
    this.configRoutes();
    this.mongoSetup();
  }
  
  private configRoutes(): void {
    this.routes = new Routes(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(express.static('public'));
  }

  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl, {useNewUrlParser: true});        
  }

}

export default new App().app;
