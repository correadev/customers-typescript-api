import { Application, Request, Response } from 'express';
import CustomerService from '../customers/customerService';

export default class CustomerController { 

  public customerService = new CustomerService();

  constructor(app: Application) {
    this.getCustomers(app);
    this.postCustomers(app);
  }
   
  public getCustomers(app: Application): void {
    app.route('/customers').get((req: Request, res: Response) => 
      this.customerService.getContacts(req, res))
  }

  public postCustomers(app: Application): void {
    app.route('/customers').post((req: Request, res: Response) => 
      this.customerService.addNewCustomer(req, res))
  }
}