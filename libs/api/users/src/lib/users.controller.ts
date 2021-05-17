import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserDto } from './dto/create-users-dto';
import { UsersService } from './users.service';
import { Observable, from } from 'rxjs';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService){}

  @Post()
  create(@Body() user: UserDto) {
    return this.usersService.create(user);
  }

  @Get()
  findAll(): Observable<UserDto[]> {
    console.log("users @Get() started [findAll]");
    return from(this.usersService.findAll());
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<UserDto> {
    console.log("users.controller.findOne(id) started");
    return from(this.usersService.findOne(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() item: UserDto): Observable<UserDto> {
    console.log("users.controller.update(id) started");
    return from(this.usersService.update(item));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    console.log("users.controller.remove(id) started");
    return this.usersService.remove(id);
  }
}
