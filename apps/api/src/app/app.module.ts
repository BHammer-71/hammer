import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AzureCosmosDbModule } from '@nestjs/azure-database';
import { environment } from './../environments/environment';

import { ApiUsersModule } from '@hammer/api/users';

@Module({
  imports: [
    ApiUsersModule,
    AzureCosmosDbModule.forRoot({
      dbName: environment.cosdatabaseId,
      endpoint: environment.cosendpoint,
      key: environment.coskey,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
