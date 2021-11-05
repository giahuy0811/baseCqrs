
import { Connection } from "mongoose";

import { UserDomainSchema } from "../schemas/user.domain.schema";


import { CommonConst } from "src/user/shared/constant/common";

export const userProvider = [
    {
        provide : CommonConst.DOMAIN_MODEL_TOKEN,
        useFactory : (connection : Connection) => connection.model('events-users',UserDomainSchema),
        inject :[CommonConst.DATABASE_DOMAIN_CONNECTION]
    }
]