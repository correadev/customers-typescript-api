import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { CustomerSchema } from './customerModel'

const Customer = mongoose.model('Customer', CustomerSchema);

export default class CustomerService {
  
  public addNewCustomer (req: Request, res: Response) {                
    let newCustomer = new Customer(req.body);

    newCustomer.save((err, contact) => {
        if(err){
            res.send(err);
        }    
        res.json(contact);
    });
  }

  public getContacts (req: Request, res: Response) {           
    Customer.find({}, (err, contact) => {
        if(err){
            res.send(err);
        }
        res.json(contact);
    });
  }

}
