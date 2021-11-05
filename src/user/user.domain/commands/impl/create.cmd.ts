import { ICommand } from "@nestjs/cqrs";
import { Types } from "mongoose";
import { CommandModel } from "src/user/shared/eventStream/model/command.model";




export class CreateUserCommand implements ICommand {
    constructor(
        public readonly messagePattern : string,
        public readonly streamId : Types.ObjectId,
        public readonly commandModel : CommandModel
    ){}
}