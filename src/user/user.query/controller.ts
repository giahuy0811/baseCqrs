import { Controller, Get, HttpCode, Post } from "@nestjs/common";
import { UserQueryService } from "./service";



@Controller('user')

export class UserQueryController {
    constructor(private readonly service : UserQueryService){}
    
    @Get('findAll')
    @HttpCode(200)
    async findAll(){
        return this.service.findAll()
    }
} 

