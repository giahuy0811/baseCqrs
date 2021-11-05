
import { ApiProperty } from "@nestjs/swagger";

import { UserDocument } from "src/user/shared/eventStream/model/user/user.interface";

export class CreateUserDto extends UserDocument{
    @ApiProperty()
    username:string;
    @ApiProperty()
    password:string;
}