import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  Res,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UsersDto } from './user.dto';
import { Response } from 'express';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getUser(@Res() res: Response): Promise<any> {
    try {
      const serviceResponse = await this.userService.getUsers();
      return res.status(HttpStatus.OK).json(serviceResponse);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
  @Get('/:id')
  async getUserById(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const serviceResponse = await this.userService.getUserById(id);
      if (Object.keys(serviceResponse).length) {
        return res.status(HttpStatus.OK).send(serviceResponse);
      } else {
        return res.status(HttpStatus.NOT_FOUND).send(serviceResponse);
      }
    } catch (error) {
      throw new BadRequestException(`User with id ${id} not found`);
    }
  }
  @Post()
  async createUser(@Body() user: UsersDto, @Res() res: Response): Promise<any> {
    try {
      const serviceResponse = await this.userService.createUser(user);
      res.status(HttpStatus.CREATED).send(serviceResponse);
    } catch (error) {
      throw new BadRequestException(`User creation failed`);
    }
  }
  @Delete('/:id')
  async deleteUser(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const serviceResponse = await this.userService.deleteUser(id);
      res.status(HttpStatus.NO_CONTENT).send(serviceResponse);
    } catch (error) {
      throw new BadRequestException(`User with id ${id} not found`);
    }
  }
  @Put('/:id')
  async updateUser(
    @Param('id') id: number,
    @Body() body,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const serviceResponse = await this.userService.updateUser(id, body);
      res.status(HttpStatus.NO_CONTENT).send(serviceResponse);
    } catch (error) {
      throw new BadRequestException(`User update failed`);
    }
  }
}
