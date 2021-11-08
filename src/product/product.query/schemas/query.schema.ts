

import * as mongoose from 'mongoose';


export const ProductQuerySchema = new mongoose.Schema({
  // _id:mongoose.Types.ObjectId,
  createdDate: {type: Date,required: true, default: new Date()},

  modifiedDate: {type: Date},
  modifiedBy: {type: String},

  name: {type: String,required: true},
  des: {type: String, required: true},
  qty: {type: Number, required: true}

})