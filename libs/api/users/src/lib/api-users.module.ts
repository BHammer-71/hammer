import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AzureCosmosDbModule } from '@nestjs/azure-database';
import { User } from './entities/users-entity';
import { UserRepository} from './users-repo';


@Module({
  imports: [
    AzureCosmosDbModule.forFeature([{ dto: User }]),
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    UserRepository,],
})
export class ApiUsersModule {}
