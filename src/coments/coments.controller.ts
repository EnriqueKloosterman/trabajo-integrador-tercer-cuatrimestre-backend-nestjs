import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { Coments } from './coments.interface';
import { ComentsService } from './coments.service';

@Controller('coments')
export class ComentsController {
  constructor(private readonly comentsService: ComentsService) {}
  @Get()
  getComents(): Promise<Coments[]> {
    return this.comentsService.getComents();
  }
  @Get('/:id')
  getComentsById(@Param('id') id: number): any {
    return this.comentsService.getComentsById(id);
  }
  @Post()
  createComents(@Body() coments: Coments): any {
    return this.comentsService.createComents(coments);
  }
}