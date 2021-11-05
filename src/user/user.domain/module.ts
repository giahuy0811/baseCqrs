import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { DomainDatabaseModule } from "../database/domain/domain.database.module";
import { CreateCommandHandler } from "./commands/handlers/create.cmd.handler";
import { CreatedEventHandler } from "./events/handlers/event-stream-created.event.handler";
import { userProvider } from "./provider/user.provider";
import { UserDomainRepository } from "./Repository/user.repository";
import { UserSagas } from "./sagas/saga";
import { UserDomainController } from "./user.controller";
import { UserDomainService } from "./user.service";


@Module({
    imports:[CqrsModule,DomainDatabaseModule],
    controllers:[UserDomainController],
    providers:[UserDomainService,
        UserDomainRepository,
        ...userProvider,
        ...[CreateCommandHandler],
        ...[CreatedEventHandler],
        UserSagas
    ]
})

export class UserDomainModule{}