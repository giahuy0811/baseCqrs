import { IEvent } from "@nestjs/cqrs";
import { Types } from "mongoose";
import { CommandModel } from "src/product/shared/eventStream/command.model";



export class ProductCreatedQueryEvent implements IEvent{
  constructor(
    public readonly messagePattern : string,
    public readonly streamId: Types.ObjectId,
    public readonly payload: CommandModel
  ){}
}