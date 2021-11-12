import { ICommand } from "@nestjs/cqrs";
import { Types } from "mongoose";
import { CommandModel } from "src/product/shared/eventStream/command.model";



export class CreateQueryCommand implements ICommand{
  constructor(
    public readonly messagesPatten: string,
    public readonly streamId : Types.ObjectId,
    public readonly commandModel:CommandModel 
  ){}
}