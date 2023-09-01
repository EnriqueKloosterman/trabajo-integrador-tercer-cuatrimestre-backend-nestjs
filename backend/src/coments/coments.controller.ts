import { Controller, Get, Param, Post, Body, Delete, Put, HttpCode, Res, HttpStatus, BadRequestException } from '@nestjs/common';
import { Coments } from './coments.interface';
import { ComentsService } from './coments.service';
import { Response } from 'express';

@Controller('coments')
export class ComentsController {
  constructor(private readonly comentsService: ComentsService) {}

  @Get()
  async getComents(@Res() res: Response): Promise<any> {
    try {
      const coments = await this.comentsService.getComents();
      return res.status(HttpStatus.OK).json(coments);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Get(':id')
  async getComentsById(@Param('id') id: number, @Res() res: Response): Promise<any> {
    try {
      const coments = await this.comentsService.getComentsById(id);
      if (coments) {
        return res.status(HttpStatus.OK).json(coments);
      } else {
        return res.status(HttpStatus.NOT_FOUND).json({ message: 'Coments not found' });
      }
    } catch (error) {
      throw new BadRequestException(`Coments with id ${id} not found.`);
    }
  }

  @Post()
  async createComents(@Body() coments: Coments, @Res() res: Response): Promise<any> {
    try {
      const createdComents = await this.comentsService.createComents(coments);
      return res.status(HttpStatus.CREATED).json(createdComents);
    } catch (error) {
      throw new BadRequestException('Coments creation failed');
    }
  }

  @Delete('/:id')
  @HttpCode(204)
  async deleteComents(@Param('id') id: number, @Res() res: Response): Promise<any> {
    try {
      await this.comentsService.deleteComents(id);
      return res.sendStatus(HttpStatus.NO_CONTENT);
    } catch (error) {
      throw new BadRequestException(`Coments with id ${id} not found.`);
    }
  }

  @Put('/:id')
  async updateComents(@Param('id') id: number, @Body() body: Coments, @Res() res: Response): Promise<any> {
    try {
      await this.comentsService.updateComents(id, body);
      return res.sendStatus(HttpStatus.NO_CONTENT);
    } catch (error) {
      throw new BadRequestException(`Coments with id ${id} not found.`);
    }
    // return this.comentsService.updateComents(id, body);
  }
}
