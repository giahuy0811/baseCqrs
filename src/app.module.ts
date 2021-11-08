import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductDomainModule } from './product/product.domain/module';
import { UserDomainModule } from './user/user.domain/module';
import { UserQueryModule } from './user/user.query/module';

@Module({
  imports: [UserDomainModule,UserQueryModule,ProductDomainModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
