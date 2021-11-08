import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { DomainDatabaseModule } from "../database/domain/domain.database.module";
import { CreateCommandHandler } from "./commands/handlers/create.cmd.handler";
import { ProductDomainController } from "./controller";
import { CreatedEventHandler } from "./events/handlers/event-stream-created.handler";
import { productProviders } from "./provider/product.provider";
import { ProductDomainRepository } from "./repository/repository";
import { ProductSagas } from "./sagas/sagas";
import { ProductDomainService } from "./service";


@Module({
  imports:[CqrsModule,DomainDatabaseModule],
  controllers: [ProductDomainController],
  providers:[...productProviders,
    ProductDomainRepository,
    ProductDomainService,
    ...[CreateCommandHandler],
    ...[CreatedEventHandler],
    ProductSagas
  ]
})

export class ProductDomainModule{}