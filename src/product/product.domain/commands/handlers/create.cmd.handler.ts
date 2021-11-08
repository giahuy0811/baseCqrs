import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { AggregateModel } from "../../models/aggregateModel";
import { CreateProductCommand } from "../impl/create.cmd";



@CommandHandler(CreateProductCommand)

export class CreateCommandHandler implements ICommandHandler<CreateProductCommand>{
  constructor(private readonly eventPublisher: EventPublisher){}
  async execute(command : CreateProductCommand){
    const aggregateModel = new AggregateModel();
    
    const cmdPublisher = this.eventPublisher.mergeObjectContext(aggregateModel);


    cmdPublisher.create(
      command.messagePattern,
      command.streamId,
      command.commandModel
    )

    cmdPublisher.commit()

  }
  
}