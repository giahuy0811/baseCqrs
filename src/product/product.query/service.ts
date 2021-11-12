import { Body, Injectable } from "@nestjs/common";
import { CreateProductDto } from "../product.domain/dto/create.product.dto";
import { ProductQueryRepository } from "./repository/query.repository";


@Injectable()

export class ProductQueryService {
  constructor(
    private readonly repository:ProductQueryRepository
  ){}


  create(@Body() product:CreateProductDto){
    return this.repository.create(product)
  }

  findAll(){
    return this.repository.findAll()
  }


}