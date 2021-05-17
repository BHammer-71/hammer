import { CosmosPartitionKey, CosmosUniqueKey } from '@nestjs/azure-database';

@CosmosPartitionKey("id")
export class User {
  id: string;
  @CosmosUniqueKey() username: string;
  password: string;
}
