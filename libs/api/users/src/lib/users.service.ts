import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users-dto';
import { UpdateUsersDto } from './dto/update-users-dto';

@Injectable()
export class UsersService {
  create(createUsersDto: CreateUsersDto) {
    return 'This action adds a new usersCrud';
  }

  findAll() {
    return `This action returns all usersCrud`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersCrud`;
  }

  update(id: number, updateUsersDto: UpdateUsersDto) {
    return `This action updates a #${id} usersCrud`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersCrud`;
  }
}
