import { Injectable } from '@nestjs/common';
import { UserRepository } from './users-repo';
import { User } from './entities/users-entity';

/**
 * Promise Pattern:
 * async findAll(): Promise<any[]>{
 *  return [];
 * }
 *
 * Observable Pattern:
 * findAll(): Observable<any[]>{
 *  return of([]);
 * }
 */

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepo: UserRepository,
  ) {}

  create(user: User) {
    return this.userRepo.create(user);
  }

  findAll(){
    console.log("users.service.findall() started");
    return this.userRepo.findAll();
  }

  findOne(id: string) {
    console.log("user.service.findOne() started");
    return this.userRepo.findById(id);
  }

  update(item: User) {
    console.log("user.service.update() started");
    return this.userRepo.upsert(item);
  }

  remove(id: string) {
    console.log("users.service.remove() started");
    return this.userRepo.remove(id);
  }

}
