import { Connection } from "mongoose";
import { CommonConst } from "src/user/shared/constant/common";
import { UserQuerySchema } from "../schema/user.schema";


export const userProvider =[
    {
        provide: CommonConst.QUERY_MODEL_TOKEN,
        useFactory: (connection: Connection) => connection.model('users',UserQuerySchema),
        inject :[CommonConst.DATABASE_QUERY_CONNECTION]
    }
]