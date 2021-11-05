import { Injectable } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
// import { response } from "express";
import { Types } from "mongoose";
import { Action } from "../shared/enum/action";
import { UserCommand } from "../shared/enum/command";
import { CreateUserCommand } from "./commands/impl/create.cmd";
import { CreateUserDto } from "./dto/create.user.dto";


@Injectable()


export class UserDomainService {

    private readonly context = UserDomainService.name;
    private commandId : Types.ObjectId;

    constructor(private readonly commandBus : CommandBus){}

    createUser(dto : CreateUserDto){
        this.commandId = new Types.ObjectId();
        return this.executeCommand(
            Action.CREATE,
            UserCommand.CREATED_USER,
            this.commandId,
            dto
        )
    }

    private executeCommand(
        action :Action,
        actionName: string,
        commandId:Types.ObjectId,
        item: any
    ){
        let cmdObject = null;
        switch(action){
            case Action.CREATE:{
                cmdObject = new CreateUserCommand(actionName,commandId,item)
            }
            break;

            default:
            break;
        }

        return this.commandBus.execute(cmdObject).then(response=>{
            return response
        }).catch(err=>{
            return err
        })
    }


}