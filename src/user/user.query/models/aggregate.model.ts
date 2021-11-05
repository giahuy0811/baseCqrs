import { AggregateRoot } from "@nestjs/cqrs";
import { Types } from "mongoose";
import { CreatedQueryEvent } from "../events/impl/event-stream-query.event";


export class AggregateModel extends AggregateRoot{
    addItem(messagePattern:string,streamId:Types.ObjectId,payload:any){
        this.apply(new CreatedQueryEvent(messagePattern,streamId,payload))
    }
}