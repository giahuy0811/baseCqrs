
import * as mongoose from 'mongoose'



export const UserDomainSchema = new mongoose.Schema ({
    createdDate :{type : Date,required : true,default : new Date()},

    modifiedDate : {type:Date},
    modifiedBy : {type:String},

    streamId: {type:mongoose.Types.ObjectId, required:true},
    actionName:{type:String,required:true},

    payload : {
        username: {type:String, required:true},
        password:{type:String,required:true}
    }
})