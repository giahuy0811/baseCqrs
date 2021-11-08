import { AggregateRoot } from "@nestjs/cqrs";
import { Types } from "mongoose";
// import { CommandModel } from "src/product/shared/eventStream/command.model";
import { ProductCreatedQueryEvent } from "../events/query-created.evt";


export class QueryAggregateModel extends AggregateRoot{
    // constructor(private readonly id: string){
    //   super()
    // }

    create(messagePattern: string,streamId:Types.ObjectId,payload:any){
      this.apply(new ProductCreatedQueryEvent(messagePattern,streamId,payload))
    }

}