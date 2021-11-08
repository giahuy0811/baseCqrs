import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { CommonConst } from "src/product/shared/constants/common";
import { ProductDocument } from "src/product/shared/eventStream/model/product.interface";


import { Document } from "mongoose";

@Injectable()

export class ProductQueryRepository {
  constructor(
    @Inject(CommonConst.QUERY_MODEL_TOKEN)
    private readonly readModel: Model<ProductDocument & Document>
  ){}

  create(readModel:ProductDocument){
    return this.readModel.create(readModel)
  }

  findAll(){
    return this.readModel.find()
  }


  // update(model): Promise<IProductDocument>{
  //   const {id} = model
  //   return this.readModel.update({id:id},model)
  // }

}