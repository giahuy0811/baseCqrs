import { Body, Controller, HttpCode, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { Types } from "mongoose";
import { CreateProductDto } from "./dto/create.product.dto";
import { UpdateProductDto } from "./dto/update.product.dto";
import { ProductDomainService } from "./service";


@Controller('product')



export class ProductDomainController {
  constructor(private readonly productService : ProductDomainService){
    
  }


  @UsePipes(new ValidationPipe({transform:true}))
  @Post('create')
  @HttpCode(201)
  async create(@Body() body: CreateProductDto){
      return await this.productService.createProduct(body)
  }


  // @Patch('update')
  // @HttpCode(200)
  // update(@Param('id') id : Types.ObjectId,@Body() body :UpdateProductDto){

  // }

}
