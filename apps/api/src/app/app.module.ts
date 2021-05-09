import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiUsersModule } from '@hammer/api/users';

@Module({
  imports: [
    ApiUsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
