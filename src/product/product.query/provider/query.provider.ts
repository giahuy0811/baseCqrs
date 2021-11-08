import { Connection } from "mongoose";
import { CommonConst } from "src/product/shared/constants/common";
import { ProductQuerySchema } from "../schemas/query.schema";


export const productQueryProviders = [
  {
    provide:CommonConst.QUERY_MODEL_TOKEN,
    useFactory: (connection: Connection) => connection.model('productQueryModel',ProductQuerySchema),
    inject: [CommonConst.DATABASE_QUERY_CONNECTION]
  }
]