import { Injectable } from '@nestjs/common';
// import { Article } from './article.interface';
import { CreateArticleDto } from './create-article.dto';
const articleURL = 'http://localhost:3030/article/';

@Injectable()
export class ArticleService {
  async getArticles(): Promise<any> {
    const res = await fetch(articleURL);
    const parsed = await res.json();
    return parsed;
  }

  async getArticleById(id: number): Promise<any> {
    const res = await fetch(`${articleURL}${id}`);
    const parsed = await res.json();
    return parsed;
  }

  async createArticle(article: CreateArticleDto): Promise<any> {
    const id = await this.createId();
    const articleWithId = { id, ...article };
    articleWithId.createdAt = new Date();
    articleWithId.updatedAt = new Date();
    const res = await fetch(articleURL, {
      method: 'POST',
      body: JSON.stringify(articleWithId),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const parsed = await res.json();
    return parsed;
  }

  async deleteArticle(id: number): Promise<any> {
    const res = await fetch(`${articleURL}${id}`, {
      method: 'DELETE',
    });
    const parsed = await res.json();
    return parsed;
  }

  async updateArticle(id: number, updatedArticle: CreateArticleDto): Promise<any> {
    const existingArticle = await this.getArticleById(id);
    if (!existingArticle) {
      return null;
    }
    
    const articleToUpdate = { id, ...updatedArticle };
    articleToUpdate.updatedAt = new Date();
    await fetch(`${articleURL}${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(articleToUpdate),
    });

    return articleToUpdate;
  }

  async createId(): Promise<number> {
    const res = await this.getArticles();
    const lastArticle = res[res.length - 1];
    const id = lastArticle ? lastArticle.id + 1 : 1;
    return id;
  }
}