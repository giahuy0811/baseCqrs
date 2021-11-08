import { Module } from "@nestjs/common";
import { domainDatabaseProviders } from "./domain.database.provider";


@Module({
    providers:[...domainDatabaseProviders],
    exports:[...domainDatabaseProviders]
})

export class DomainDatabaseModule {}