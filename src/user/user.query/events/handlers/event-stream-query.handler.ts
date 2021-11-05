import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { UserQueryRepository } from "../../repository/user.repository";
import { CreatedQueryEvent } from "../impl/event-stream-query.event";


@EventsHandler(CreatedQueryEvent)

export class QueryEventHandler implements IEventHandler<CreatedQueryEvent>{
    constructor(private readonly repository : UserQueryRepository){}

    async handle(event : CreatedQueryEvent){
        console.log('handler')
        if(event && event instanceof CreatedQueryEvent){
            return this.createdHandler(event)
        }
    }

    private createdHandler(event : CreatedQueryEvent){
        console.log('createH')
        return this.repository.create({
            _id:event.streamId,
            ...event.payload
        })
    }

}

