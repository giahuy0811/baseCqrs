
import * as mongoose from 'mongoose'


export const UserQuerySchema = new mongoose.Schema({
    createdDate: { type: Date, required: true, default: new Date() },
    createdBy: { type: String },

    modifiedDate: { type: Date },
    modifiedBy: { type: String },

    username: { type: String, required: true },
    password: { type: String, required: true }
})