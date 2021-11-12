import { IEvent } from "@nestjs/cqrs";
import { Types } from "mongoose";



export class ProductCreatedQueryEvent implements IEvent{
  constructor(
    public readonly messagePattern : string,
    public readonly streamId: Types.ObjectId,
    public readonly payload: any
  ){}
}