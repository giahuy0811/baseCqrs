


import * as mongoose from 'mongoose';

import { CommonConst } from 'src/product/shared/constants/common';


export const domainDatabaseProviders = [
    {
        provide : CommonConst.DATABASE_DOMAIN_CONNECTION,
        useFactory : () : mongoose.Connection => mongoose.createConnection('mongodb://localhost:27017/ProductEventStore')
    }
]