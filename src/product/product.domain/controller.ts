import { Body, Controller, HttpCode, Param, Patch, Post } from "@nestjs/common";
import { Types } from "mongoose";
import { ProductDocument } from "../shared/eventStream/model/product.interface";
import { CreateProductDto } from "./dto/create.product.dto";
import { UpdateProductDto } from "./dto/update.product.dto";
import { ProductDomainService } from "./service";


@Controller('product')



export class ProductDomainController {
  constructor(private readonly productService : ProductDomainService){
    
  }

  @Post('create')
  @HttpCode(201)
  create(@Body() body: CreateProductDto){
      return this.productService.createProduct(body)
  }


  // @Patch('update')
  // @HttpCode(200)
  // update(@Param('id') id : Types.ObjectId,@Body() body :UpdateProductDto){

  // }

}
