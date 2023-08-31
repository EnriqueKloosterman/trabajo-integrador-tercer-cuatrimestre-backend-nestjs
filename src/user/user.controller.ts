import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  HttpCode,
} from '@nestjs/common';
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
  @Delete('/:id')
  deleteUser(@Param('id') id: number): any {
    return this.userService.deleteUser(id);
  }
  @Put('/:id')
  @HttpCode(204)
  updateUser(@Param('id') id: number, @Body() body): Promise<User> {
    return this.userService.updateUser(id, body);
  }
}
