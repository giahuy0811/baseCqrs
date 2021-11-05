

import { Types } from "mongoose";

import { ModelBase } from "../../base/model.base";

export class Payload<T> extends ModelBase{
    createdDate: Date;
    createdBy: string;
    
    modifiedDate: Date;
    modifiedBy: string;
  
    actionName: string;
    streamId: Types.ObjectId;
  
    payload: T;
}