import { Injectable } from '@nestjs/common';


export class ArticleService {
  async getArticles(): Promise<Article[]> {
    const res = await fetch(URL);
    const parsed = await res.json();
    return parsed;
  }
  async getArticleById(id: number): Promise<Article> {
    const res = await fetch(`${URL}${id}`);
    const parsed = await res.json();
    return parsed;
  }
  async createArticle(article: Article): Promise<Article> {
    const id = await this.createId();
    const articleId = { id, ...Article };
    const res = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(articleId),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const parsed = await res.json();
    return parsed;
  }
  async createId(): Promise<number> {
    const res = await this.getArticles();
    const lastArticle = res[res.length - 1];
    const id = lastArticle.id + 1;
    return id;
  }
}
