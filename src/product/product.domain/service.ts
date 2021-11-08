import { Injectable } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { Types } from "mongoose";

import { Action } from "../shared/enum/action";
import { ProductCommand } from "../shared/enum/command";
import { CreateProductCommand } from "./commands/impl/create.cmd";
// import { UpdateProductCommand } from "./commands/impl/update.cmd";

import { CreateProductDto } from "./dto/create.product.dto";
import { UpdateProductDto } from "./dto/update.product.dto";



@Injectable()

export class ProductDomainService {
    // private context = ProductDomainService.name;
    private commandId : Types.ObjectId;

    constructor(private readonly commandBus : CommandBus){}


    createProduct(dto : CreateProductDto){
        this.commandId = new Types.ObjectId()
        return this.executeCommand(
          Action.CREATE,
          ProductCommand.CREATE_PRODUCT,
          this.commandId,
          dto
        )
    }

    // async updateProduct(dto: UpdateProductDto){
    //   this.commandId = new Types.ObjectId();
    //   const productInfo = 
    // }


    private executeCommand(
      action: Action,
      actionName: string,
      commandId: Types.ObjectId,
      item: any
    ){
      let cmdObject = null;
      switch(action){
        case Action.CREATE:{
          cmdObject = new CreateProductCommand(actionName,commandId,item)
        }break;

        // case Action.UPDATE: {
        //   cmdObject = new UpdateProductCommand(actionName,commandId,item)
        // }break;

        default: break;

      }

      return this.commandBus.execute(cmdObject).then(res=>{
        console.log("res",res)
        return res
      }).catch(err=>{
        return err
      })
    }



}