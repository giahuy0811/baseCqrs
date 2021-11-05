import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { UserDomainRepository } from "../../Repository/user.repository";
import { CreatedUserEvent } from "../impl/event-stream-created.event";



@EventsHandler(CreatedUserEvent)

export class CreatedEventHandler implements IEventHandler<CreatedUserEvent>{
    constructor(private readonly userRepository: UserDomainRepository){}

    async handle(event : CreatedUserEvent){
        return this.userRepository.createEvent(event)
    }
}