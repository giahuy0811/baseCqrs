import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { CommonConst } from "src/user/shared/constant/common";
import { UserDocument } from "src/user/shared/eventStream/model/user/user.interface";

import { Document } from "mongoose";
import { Payload } from "src/user/shared/eventStream/model/payload.model";
import { CreatedUserEvent } from "../events/impl/event-stream-created.event";

@Injectable()

export class UserDomainRepository {
    constructor(
        @Inject(CommonConst.DOMAIN_MODEL_TOKEN)
        private readModel : Model<Payload <UserDocument> & Document >
    ){}
    

    createEvent(event : CreatedUserEvent){
        return this.readModel.create({
            streamId:event.streamId,
            actionName:event.messagePattern,
            payload:event.payload
        }as Payload<Document>) 
    }

}