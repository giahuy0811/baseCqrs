import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { CommonConst } from "src/user/shared/constant/common";
import { UserDocument } from "src/user/shared/eventStream/model/user/user.interface";
import { Document } from "mongoose";

@Injectable()

export class UserQueryRepository {
    constructor(
        @Inject(CommonConst.QUERY_MODEL_TOKEN)
        private readModel : Model<UserDocument & Document> 
    ){}
    async create(user : UserDocument) {
        return this.readModel.create(user)
    }

    async findAll() : Promise<UserDocument[]>{
        return this.readModel.find()
    }
}