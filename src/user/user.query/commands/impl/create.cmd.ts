import { ICommand } from "@nestjs/cqrs";
import { Types } from "mongoose";
import { UserDocument } from "src/user/shared/eventStream/model/user/user.interface";


export class CreateUserQueryCommand implements ICommand {
    constructor(
        public readonly messagePattern : string,
        public readonly streamId: Types.ObjectId,
        public readonly commandModel : UserDocument
    ){}
}