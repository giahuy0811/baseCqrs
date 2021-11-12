import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { QueryAggregateModel } from "../../models/query-aggregate.model";

import { CreateQueryCommand } from "../impl/create-query.cmd";





@CommandHandler(CreateQueryCommand)

export class CreateQueryCommandHandler implements ICommandHandler<CreateQueryCommand>{
  
  constructor(private readonly eventPublisher: EventPublisher){}

  async execute(command: CreateQueryCommand){
    console.log("query command")
    const aggregateModel = new QueryAggregateModel();


    const cmdPublisher = this.eventPublisher.mergeObjectContext(aggregateModel);

    cmdPublisher.create(command.messagesPatten,command.streamId,command.commandModel)

    cmdPublisher.commit()

  }

}