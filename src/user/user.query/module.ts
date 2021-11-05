import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { QueryDatabaseModule } from "../database/query/query.database.module";
import { CreateUserQueryCommandHandler } from "./commands/handlers/create.cmd.handler";
import { UserQueryController } from "./controller";
import { QueryEventHandler } from "./events/handlers/event-stream-query.handler";
import { userProvider } from "./provider/user.provider";
import { UserQueryRepository } from "./repository/user.repository";
import { UserQueryService } from "./service";





@Module({
    imports:[CqrsModule, QueryDatabaseModule],
    controllers:[UserQueryController],
    providers:[...userProvider,
    UserQueryService,
    UserQueryRepository,
    ...[QueryEventHandler],
    ...[CreateUserQueryCommandHandler]
    ],
    exports :[UserQueryModule]
})

export class UserQueryModule {}