

import * as mongoose from 'mongoose';


export const ProductDomainSchema = new mongoose.Schema({
  createdDate: {type: Date,required: true, default: new Date()},

  modifiedDate: {type: Date},
  modifiedBy: {type: String},

  streamId: {type: mongoose.Types.ObjectId},
  actionName: {type: String, required: true},

  payload: {
    name: {type: String, required: true},
    des: {type: String, required: true},
    qty: {type:Number, required: true}
  }
  
})


