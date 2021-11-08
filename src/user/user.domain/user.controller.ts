import { Body, Controller, HttpCode, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateUserDto } from "./dto/create.user.dto";
import { UserDomainService } from "./user.service";


@Controller('user')


export class UserDomainController {
    constructor(private userDomainService:UserDomainService ){}

    @Post('create')
    @HttpCode(201)
    @UsePipes(new ValidationPipe({transform:true}))
    create(@Body() body:CreateUserDto) {
        return this.userDomainService.createUser(body)
    }

}