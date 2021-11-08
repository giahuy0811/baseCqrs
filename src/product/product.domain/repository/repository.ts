import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { CommonConst } from "src/product/shared/constants/common";
import { ProductDocument } from "src/product/shared/eventStream/model/product.interface";
import { Payload } from "src/product/shared/eventStream/payload.model";

import { Document } from "mongoose";
import { CreatedProductEvent } from "../events/impl/event-stream-created.event";


@Injectable()

export class ProductDomainRepository{
  constructor(
    @Inject(CommonConst.DOMAIN_MODEL_TOKEN)
    private readModel : Model<Payload <ProductDocument & Document>>
  ){}

  createEvent(event: CreatedProductEvent){
    return this.readModel.create({
        streamId: event.streamId,
        actionName: event.messagePattern,
        payload: event.payload,
      } as unknown as Payload<Document> )
  }
  
}