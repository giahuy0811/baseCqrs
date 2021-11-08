import { Types } from "mongoose";
import { ModelBase } from "../../base/model.base";

export class ProductDocument extends ModelBase{
  name : string;
  des : string;
  qty : number;
}