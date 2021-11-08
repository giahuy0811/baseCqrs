import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { ProductQueryRepository } from "../repository/query.repository";
import { ProductCreatedQueryEvent } from "./query-created.evt";


@EventsHandler(ProductCreatedQueryEvent)

export class ProductQueryEventHandler implements IEventHandler<ProductCreatedQueryEvent>{
  constructor(private readonly repository: ProductQueryRepository){}
  async handle(event: ProductCreatedQueryEvent){
    if(event && event instanceof ProductCreatedQueryEvent){
      return this.createdHandler(event)
    }
  }

  private createdHandler(event: ProductCreatedQueryEvent){
    return this.repository.create({
      _id: event.streamId,
      ...event.payload
    })
  }
}