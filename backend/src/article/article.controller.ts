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
  HttpException,
  BadRequestException,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { Response } from 'express';
import { CreateArticleDto } from './create-article.dto';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  async getArticles(@Res() res: Response): Promise<any> {
    const articles = await this.articleService.getArticles();
    return res.status(HttpStatus.OK).json(articles);
  }

  @Get('/:id')
  async getArticleById(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<any> {
    const article = await this.articleService.getArticleById(id);
    if (!article) {
      throw new HttpException(
        `Article with id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
    return res.status(HttpStatus.OK).json(article);
  }

  @Post()
  async createArticle(
    @Body() createArticleDto: CreateArticleDto,
    @Res() res: Response,
  ): Promise<any> {
    const createdArticle = await this.articleService.createArticle(
      createArticleDto,
    );
    return res.status(HttpStatus.CREATED).json(createdArticle);
  }

  @Delete('/:id')
  deleteArticle(@Param('id') id: number): Promise<CreateArticleDto> {
    return this.articleService.deleteArticle(id);
  }

  @Put('/:id')
  async updateArticle(
    @Param('id') id: number,
    @Body() body,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const serviceResponse = await this.articleService.updateArticle(id, body);
      res.status(HttpStatus.NO_CONTENT).send(serviceResponse);
    } catch (error) {
      throw new BadRequestException(`Article update failed`);
    }
  }
}
