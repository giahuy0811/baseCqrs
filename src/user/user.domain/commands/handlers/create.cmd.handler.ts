import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { AggregateModel } from "../../models/aggregate.model";
import { CreateUserCommand } from "../impl/create.cmd";



@CommandHandler(CreateUserCommand)

export class CreateCommandHandler implements ICommandHandler<CreateUserCommand>{
    constructor(private readonly eventPublsher : EventPublisher){}
    async execute(command : CreateUserCommand){
        const aggreateModel = new AggregateModel()

        const cmdPublisher = this.eventPublsher.mergeObjectContext(aggreateModel)

        //publisher
        cmdPublisher.create(
            command.messagePattern,
            command.streamId,
            command.commandModel
        );
        cmdPublisher.commit()
    }
}