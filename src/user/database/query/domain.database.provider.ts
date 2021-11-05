
import { CommonConst } from "src/user/shared/constant/common";
import * as mongoose from 'mongoose'

export const queryDatabaseProviders =[
    {
        provide : CommonConst.DATABASE_QUERY_CONNECTION,
        useFactory : (): mongoose.Connection => mongoose.createConnection('mongodb://localhost:27017/readModel')
    }
]