import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { ProductDomainRepository } from "../../repository/repository";
import { CreatedProductEvent } from "../impl/event-stream-created.event";





@EventsHandler(CreatedProductEvent)


export class CreatedEventHandler implements IEventHandler<CreatedProductEvent>{
  constructor(private readonly productRepository: ProductDomainRepository ){}

  async handle(event: CreatedProductEvent){
    return this.productRepository.createEvent(event)
  }
}