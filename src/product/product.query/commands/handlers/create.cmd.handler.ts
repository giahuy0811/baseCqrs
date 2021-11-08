import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { QueryAggregateModel } from "../../models/query-aggregate.model";

import { CreateQueryCommand } from "../impl/create-query.cmd";





@CommandHandler(CreateQueryCommand)

export class CreateQueryCommandHandler implements ICommandHandler<CreateQueryCommand>{
  constructor(
    // private readonly repository: ProductQueryRepository,
    private readonly eventPublisher: EventPublisher
  ){}

  async execute(command: CreateQueryCommand){
    // const {commandModel} = command;
    // console.log(commandModel)

    // const product = await this.repository.create(command)
    const aggreateModel = new QueryAggregateModel()
    const cmdPublisher = this.eventPublisher.mergeObjectContext(aggreateModel)
    cmdPublisher.create(
        command.messagesPatten,
        command.id,
        command.commandModel
    )
    cmdPublisher.commit()

  }
}