
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { Article } from './article.interface';
import { ArticleService } from './article.service';

@Controller('articles')
export class articleController {
  constructor(private readonly articleService: ArticleService) {}
  
  @Get()
  getArticles(): Promise<Article[]> {
    return this.articleService.getArticles();
  }
  @Get('/:id')
  getArticleById(@Param('id') id: number): any {
    return this.articleService.getArticleById(id);
  }
  @Post()
  createArticle(@Body() article: Article): any {
    return this.articleService.createArticle(article);
  }
}
 

  




