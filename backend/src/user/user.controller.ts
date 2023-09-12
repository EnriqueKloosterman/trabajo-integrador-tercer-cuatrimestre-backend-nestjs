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
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UsersDto } from './user.dto';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { NotFoundException } from '@nestjs/common';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  async getUser(@Res() res: Response): Promise<any> {
    try {
      const serviceResponse = await this.userService.getUsers();
      return res.status(HttpStatus.OK).json(serviceResponse);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
  @Get(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getUsersById(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const serviceResponse = await this.userService.getUserById(id);
      if (Object.keys(serviceResponse).length) {
        return res.status(HttpStatus.OK).send(serviceResponse);
      } else {
        throw new NotFoundException(`user with id ${id} not found.`);
      }
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createUser(@Body() user: UsersDto, @Res() res: Response): Promise<any> {
    try {
      const serviceResponse = await this.userService.createUser(user);
      res.status(HttpStatus.CREATED).send(serviceResponse);
    } catch (error) {
      throw new BadRequestException(`User creation failed`);
    }
  }
  @Delete('/:id')
  @UsePipes(new ValidationPipe({ transform: true }))
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
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateUser(
    @Param('id') id: number,
    @Body() user: UsersDto,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const serviceResponse = await this.userService.updateUser(id, user);
      if(serviceResponse){
        return res.status(HttpStatus.NO_CONTENT).send(serviceResponse);
      }else{
        throw new BadRequestException(`User with id ${id} not found`);
      }
    } catch (error) {
      throw new BadRequestException(`User with id ${id} not found`);
    }
  }
}
