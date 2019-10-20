import { Application, Request, Response } from 'express';
import CustomerController from './customer-controller';

class Routes {
  
  private customerRoutes: CustomerController;
    
  constructor(app: Application) {
    this.defaultRoute(app);
    this.customerRoutes = new CustomerController(app);
  }
  
  public defaultRoute (app: Application): void {
    app.route('/').get((req: Request, res: Response) => {            
        res.status(200).send({
        message: 'Aplication Works!'
      })
    })
  }

}

export default Routes
