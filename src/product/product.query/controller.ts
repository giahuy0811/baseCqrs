import { Controller, Get } from "@nestjs/common";

import { ProductQueryService } from "./service";


@Controller('product')

export class ProductQueryController {
    constructor(private readonly productService: ProductQueryService){}
  
  
    
    @Get('/getAll')
    findAll(){
      return this.productService.findAll()
    }
}