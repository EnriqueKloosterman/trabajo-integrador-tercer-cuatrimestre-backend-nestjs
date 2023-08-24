import { Injectable } from '@nestjs/common';
import { User } from './user.interface';
const URL = 'http://localhost:3030/users/';

@Injectable()
export class UserService {
  async getUsers(): Promise<User[]> {
    const res = await fetch(URL);
    const parsed = await res.json();
    return parsed;
  }
  async getUserById(id: number): Promise<User> {
    const res = await fetch(`${URL}${id}`);
    const parsed = await res.json();
    return parsed;
  }
  async createUser(user: User): Promise<User> {
    const id = await this.createId();
    const userId = { id, ...user };
    const res = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(userId),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const parsed = await res.json();
    return parsed;
  }
  async createId(): Promise<number> {
    const res = await this.getUsers();
    const lastUser = res[res.length - 1];
    const id = lastUser.id + 1;
    return id;
  }
}
