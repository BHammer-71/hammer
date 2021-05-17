import { Logger, Injectable } from '@nestjs/common';
import { Container } from '@azure/cosmos';
import { InjectModel } from '@nestjs/azure-database';
import { User } from './entities/users-entity';

@Injectable()
export class UserRepository {
  private logger = new Logger(this.constructor.name);

  constructor(
    @InjectModel(User) private readonly container: Container
    ) {}

  async create(item: User): Promise<User> {
    // item.createdAt = new Date();
    const response = await this.container.items.create(item);
    this.logger.verbose(`Create RUs: ${response.requestCharge}`);
    return response.resource;
  }

  async upsert(item: User): Promise<User> {
    const response = await this.container.items.upsert<User>(item);
    this.logger.verbose(`Upsert RUs: ${response.requestCharge}`);
    return response.resource;
  }

  async remove(id: string) {
    // const item = this.container.item(id);
    // const result = await item.delete();
    const res = await this.container.item(id).delete();
    this.logger.verbose(`Remove item RUs: ${res.requestCharge}`);
  }

  async findAll(): Promise<User[]> {
    console.log("repo findAll() Started");
    const res = await this.container.items.readAll<User>().fetchAll();
    this.logger.verbose(`Find All RUs: ${res.requestCharge}`);

    return res.resources;
  }

  async findById(id: string): Promise<User> {
    /*
    const querySpec = {
      query: 'SELECT * FROM root r WHERE r.id=@id',
      parameters: [
        {
          name: '@id',
          value: id,
        },
      ],
    };

    const results = await this.container.items
      .query<User>(querySpec, {})
      .fetchAll();
    this.logger.verbose(`Find By Id RUs: ${results.requestCharge}`);
    return results.resources.shift();
    */
    const result = await this.container.item(id).read<User>();
    this.logger.verbose(`Find By Id RUs: ${result.requestCharge}`);

    return result.resource;

  }

  async count(): Promise<number> {
    const querySpec = {
      query: 'SELECT VALUE COUNT(1) FROM root r',
    };

    const results = await this.container.items.query(querySpec).fetchAll();
    this.logger.verbose(`Count RUs: ${results.requestCharge}`);
    return results.resources.shift();
  }
}
