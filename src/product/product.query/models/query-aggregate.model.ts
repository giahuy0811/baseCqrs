import { AggregateRoot } from "@nestjs/cqrs";
import { Types } from "mongoose";
import { ProductCreatedQueryEvent } from "../events/query-created.evt";


export class QueryAggregateModel extends AggregateRoot{

    create(messagePattern: string,streamId:Types.ObjectId,payload:any){
      this.apply(new ProductCreatedQueryEvent(messagePattern,streamId,payload))
    }

}