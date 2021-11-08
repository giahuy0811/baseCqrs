import { Connection } from "mongoose";
import { CommonConst } from "src/product/shared/constants/common";
import { ProductDomainSchema } from "../schemas/product.domain.schema";



export const productProviders = [
  {
    provide: CommonConst.DOMAIN_MODEL_TOKEN,
    useFactory: (connection: Connection) => connection.model('products',ProductDomainSchema),
    inject: [CommonConst.DATABASE_DOMAIN_CONNECTION]
  }
]