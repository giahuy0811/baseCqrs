import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { AggregateModel } from "../../models/aggregate.model";
import { CreateUserQueryCommand } from "../impl/create.cmd";



@CommandHandler(CreateUserQueryCommand)

export class CreateUserQueryCommandHandler implements ICommandHandler<CreateUserQueryCommand> {
    constructor(private readonly eventPublisher : EventPublisher){}


    async execute(command : CreateUserQueryCommand){
        const aggreateModel = new AggregateModel()
        const cmdPublisher = this.eventPublisher.mergeObjectContext(aggreateModel);
        console.log('xxxx')
        cmdPublisher.addItem(
            command.messagePattern,
            command.streamId,
            command.commandModel
        )

        cmdPublisher.commit()
    }

}