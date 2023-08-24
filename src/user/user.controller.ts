import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.interface';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getUser(): Promise<User[]> {
    return this.userService.getUsers();
  }
  @Get('/:id')
  getUserById(@Param('id') id: number): any {
    return this.userService.getUserById(id);
  }
  @Post()
  createUser(@Body() user: User): any {
    return this.userService.createUser(user);
  }
}
