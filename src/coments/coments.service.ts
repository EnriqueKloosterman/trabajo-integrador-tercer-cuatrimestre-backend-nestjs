import { Injectable } from '@nestjs/common';
import { Coments } from './coments.interface';
import fetch from 'node-fetch'; // 

const URL = 'http://localhost:3030/coments/';

@Injectable()
export class ComentsService {
  async getComents(): Promise<Coments[]> {
    const res = await fetch(URL);
    const parsed = await res.json();
    return parsed;
  }

  async getComentsById(id: number): Promise<Coments> {
    const res = await fetch(`${URL}${id}`);
    const parsed = await res.json();
    return parsed;
  }

  async createComents(coments: Coments): Promise<Coments> {
    const id = await this.createId();
    const comentsWithId = { id, ...coments };
    const res = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(comentsWithId),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const parsed = await res.json();
    return parsed;
  }

  async createId(): Promise<number> {
    const res = await this.getComents();
    const lastComent = res[res.length - 1];
    const id = lastComent.id + 1;
    return id;
  }
}
