import { Types } from "mongoose";


export abstract class ModelBase {


  createdDate: Date;
  createdBy: string;

  modifiedDate: Date;
  modifiedBy: string;
}