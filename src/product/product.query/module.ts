import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { QueryDatabaseModule } from "../database/query/query.database.module";
import { CreateQueryCommandHandler } from "./commands/handlers/create.cmd.handler";
import { ProductQueryEventHandler } from "./events/query-created.evt.handler";
import { productQueryProviders } from "./provider/query.provider";
import { ProductQueryRepository } from "./repository/query.repository";
import { ProductQueryService } from "./service";


@Module({
  imports:[CqrsModule,QueryDatabaseModule],
  providers:[
    ...productQueryProviders,
    ProductQueryRepository,
    ProductQueryService,
    ...[CreateQueryCommandHandler],
    ...[ProductQueryEventHandler]
      
  ],
  exports:[ProductQueryModule]
})

export class ProductQueryModule{}