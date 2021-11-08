import { AggregateRoot } from "@nestjs/cqrs";
import { Types } from "mongoose";
import { CreatedProductEvent } from "../events/impl/event-stream-created.event";



export class AggregateModel extends AggregateRoot{
  create(messagePattern: string,streamId : Types.ObjectId,payload: any){
    this.apply(new CreatedProductEvent(messagePattern,streamId,payload))
  }
  
  // update(messagePattern: string)

}