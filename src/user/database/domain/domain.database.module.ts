
import { Module } from "@nestjs/common";
import { domainDatabaseProviders } from "./domain.database.privder";



@Module({
    providers:[...domainDatabaseProviders],
    exports : [...domainDatabaseProviders]
})

export class DomainDatabaseModule {}