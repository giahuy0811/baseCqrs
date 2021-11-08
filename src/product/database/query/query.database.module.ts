import { Module } from "@nestjs/common";
import { queryDatabaseProviders } from "./query.database.provider";


@Module({
    providers: [...queryDatabaseProviders],
    exports:[...queryDatabaseProviders]
})

export class QueryDatabaseModule {}