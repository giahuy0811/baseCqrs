


import { CommonConst } from "src/user/shared/constant/common";

import * as mongoose from 'mongoose'

export const domainDatabaseProviders = [
    {
        provide: CommonConst.DATABASE_DOMAIN_CONNECTION,
        useFactory : () : mongoose.Connection => mongoose.createConnection('mongodb://localhost:27017/EventStore')
    }
]