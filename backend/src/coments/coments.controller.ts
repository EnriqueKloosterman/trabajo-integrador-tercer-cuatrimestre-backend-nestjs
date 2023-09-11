import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  HttpCode,
  Res,
  HttpStatus,
  BadRequestException,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { ComentsService } from './coments.service';
import { Response } from 'express';
import { CreateComentsDto } from './coments.dto';
import { ApiTags } from '@nestjs/swagger';
import { NotFoundException } from '@nestjs/common';

@ApiTags('coments')
@Controller('coments')
export class ComentsController {
  constructor(private readonly comentsService: ComentsService) {}

  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  async getComents(@Res() res: Response): Promise<any> {
    try {
      const coments = await this.comentsService.getComents();
      return res.status(HttpStatus.OK).json(coments);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Get(':id')
@UsePipes(new ValidationPipe({ transform: true }))
async getComentsById(
  @Param('id') id: number,
  @Res() res: Response,
): Promise<any> {
  try {
    const serviceResponse = await this.comentsService.getComentsById(id);
    if (Object.keys(serviceResponse).length) {
      return res.status(HttpStatus.OK).send(serviceResponse);
    } else {
      throw new NotFoundException(`Recipe with id ${id} not found.`);
    }
  } catch (error) {
    return res.status(HttpStatus.BAD_REQUEST).json(error);
  }
}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createComents(
    @Body() createdComentsDto: CreateComentsDto,
    @Res() res: Response,
  ): Promise<any> {
    const createdComents = await this.comentsService.createComents(
      createdComentsDto,
    );
    return res.status(HttpStatus.CREATED).json(createdComents);
  }

  @Delete('/:id')
  @UsePipes(new ValidationPipe({ transform: true }))
  @HttpCode(204)
  async deleteComents(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<any> {
    try {
      await this.comentsService.deleteComents(id);
      return res.sendStatus(HttpStatus.NO_CONTENT);
    } catch (error) {
      throw new BadRequestException(`Coments with id ${id} not found.`);
    }
  }

  @Put('/:id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateComents(
    @Param('id') id: number,
    @Body() body: CreateComentsDto,
    @Res() res: Response,
  ): Promise<any> {
    try {
      await this.comentsService.updateComents(id, body);
      return res.sendStatus(HttpStatus.NO_CONTENT);
    } catch (error) {
      throw new BadRequestException(`Coments with id ${id} not found.`);
    }
  }
}
