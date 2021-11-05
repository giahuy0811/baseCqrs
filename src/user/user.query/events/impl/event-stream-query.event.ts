import { IEvent } from "@nestjs/cqrs";
import { Types } from "mongoose";


export class CreatedQueryEvent implements IEvent {
    constructor(
        public readonly messagePattern : string,
        public readonly streamId: Types.ObjectId,
        public readonly payload : any
    ){}
}