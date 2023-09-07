import { Controller, Get, Param, Post, Body, Delete, Put, HttpCode, Res, HttpStatus, HttpException } from '@nestjs/common';
import { Article } from './article.interface';
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
  async getArticleById(@Param('id') id: number, @Res() res: Response): Promise<any> {
    const article = await this.articleService.getArticleById(id);
    if (!article) {
      throw new HttpException(`Article with id ${id} not found.`, HttpStatus.NOT_FOUND);
    }
    return res.status(HttpStatus.OK).json(article);
  }

  @Post()
  async createArticle(@Body() createArticleDto: CreateArticleDto, @Res() res: Response): Promise<any> {
    const createdArticle = await this.articleService.createArticle(createArticleDto);
    return res.status(HttpStatus.CREATED).json(createdArticle);
  }

  @Delete('/:id')
  deleteArticle(@Param('id') id: number): Promise<Article> {
    return this.articleService.deleteArticle(id);
  }

  @Put('/:id')
  @HttpCode(204)
  updateArticle(@Param('id') id: number, @Body() updatedArticle: Article): Promise<Article> {
    return this.articleService.updateArticle(id, updatedArticle);
  }
}
