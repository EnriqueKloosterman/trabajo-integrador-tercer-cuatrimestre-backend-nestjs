import { Controller, Get, Param, Post, Body, Delete, Put, HttpCode, Res, HttpStatus, BadRequestException } from '@nestjs/common';
import { Article } from './article.interface';
import { ArticleService } from './article.service';
import { Response } from 'express';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  async getArticles(@Res() res: Response): Promise<any> {
    try {
      const articles = await this.articleService.getArticles();
      return res.status(HttpStatus.OK).json(articles);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Get('/:id')
  async getArticleById(@Param('id') id: number, @Res() res: Response): Promise<any> {
    try {
      const article = await this.articleService.getArticleById(id);
      if (article) {
        return res.status(HttpStatus.OK).json(article);
      } else {
        return res.status(HttpStatus.NOT_FOUND).json({ message: 'Article not found' });
      }
    } catch (error) {
      throw new BadRequestException(`Article with id ${id} not found.`);
    }
  }

  @Post()
  async createArticle(@Body() article: Article, @Res() res: Response): Promise<any> {
    try {
      const createdArticle = await this.articleService.createArticle(article);
      return res.status(HttpStatus.CREATED).json(createdArticle);
    } catch (error) {
      throw new BadRequestException('Article creation failed');
    }
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
