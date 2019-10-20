import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CustomerSchema = new Schema({
  name: {
    type: String,
    required: 'Informe o Nome.'
  },
  cpf: {
    type: Number,
    required: 'Informe o CPF.'
  },
  email: {
    type: String,
    required: 'Informe o E-mail'            
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  update_at: {
    type: Date,
    default: Date.now
  }
});