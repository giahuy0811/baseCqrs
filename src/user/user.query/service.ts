import { Body, Injectable } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { CreateUserDto } from "../user.domain/dto/create.user.dto";
import { UserQueryRepository } from "./repository/user.repository";


@Injectable()

export class UserQueryService {
    constructor(private readonly userRepository : UserQueryRepository){}

    async findAll(){
        return this.userRepository.findAll()
    }

    async create(@Body() user:CreateUserDto){
        console.log(1,user)
        return this.userRepository.create(user)
    }

}