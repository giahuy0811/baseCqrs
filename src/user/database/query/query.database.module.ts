import { Module } from "@nestjs/common";
import { queryDatabaseProviders } from "./domain.database.provider";


@Module({
    providers:[...queryDatabaseProviders],
    exports :[...queryDatabaseProviders]
})

export class QueryDatabaseModule {}