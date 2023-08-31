import { Controller, Get, Param, Post, Body, Delete, Put, HttpCode } from '@nestjs/common';
import { Article } from './article.interface';
import { ArticleService } from './article.service';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  getArticles(): Promise<Article[]> {
    return this.articleService.getArticles();
  }

  @Get('/:id')
  getArticleById(@Param('id') id: number): Promise<Article> {
    return this.articleService.getArticleById(id);
  }

  @Post()
  createArticle(@Body() article: Article): Promise<Article> {
    return this.articleService.createArticle(article);
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
