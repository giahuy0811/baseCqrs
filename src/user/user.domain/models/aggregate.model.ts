import { AggregateRoot } from "@nestjs/cqrs";
import { Types } from "mongoose";
import { CreatedUserEvent } from "../events/impl/event-stream-created.event";



export class AggregateModel extends AggregateRoot {
    create(messagePattern : string,streamId:Types.ObjectId,payload:any){
        this.apply(new CreatedUserEvent(messagePattern,streamId,payload) )
    }
}