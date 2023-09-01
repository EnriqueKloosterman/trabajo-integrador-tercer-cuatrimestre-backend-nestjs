import { Injectable } from '@nestjs/common';
import { Coments } from './coments.interface';
const comentsURL = 'http://localhost:3030/coments/';

@Injectable()
export class ComentsService {
  async getComents(): Promise<Coments[]> {
    const res = await fetch(comentsURL);
    const parsed = await res.json();
    return parsed;
  }

  async getComentsById(id: number): Promise<Coments> {
    const res = await fetch(`${comentsURL}${id}`);
    const parsed = await res.json();
    return parsed;
  }

  async createComents(coments: Coments): Promise<Coments> {
    const id = await this.createId();
    const comentsWithId = { id, ...coments };
    const res = await fetch(comentsURL, {
      method: 'POST',
      body: JSON.stringify(comentsWithId),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const parsed = await res.json();
    return parsed;
  }

  async deleteComents(id: number): Promise<Coments> {
    const res = await fetch(`${comentsURL}${id}`, {
      method: 'DELETE',
    });
    const parsed = await res.json();
    return parsed;
  }

  async updateComents(id: number, Coments: Coments): Promise<Coments> {
    const existingComents = await this.getComentsById(id);
    if(!Object.keys(existingComents).length) return;
    const updateComent = {id, ...Coments};
    await fetch(`${comentsURL}/${id}` ,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateComent)
    })
  }

  async createId(): Promise<number> {
    const res = await this.getComents();
    const lastComent = res[res.length - 1];
    const id = lastComent ? lastComent.id + 1 : 1; 
    return id;
  }
}

