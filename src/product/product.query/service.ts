import { Injectable } from "@nestjs/common";
import { ProductQueryRepository } from "./repository/query.repository";


@Injectable()

export class ProductQueryService {
  constructor(
    private readonly repository:ProductQueryRepository
  ){}


  findAll(){
    return this.repository.findAll()
  }


}