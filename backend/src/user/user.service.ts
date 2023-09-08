import { Injectable } from '@nestjs/common';
import { UsersDto } from './user.dto';
import { log } from 'console';
const URL = 'http://localhost:3030/users/';

@Injectable()
export class UserService {
  async getUsers(): Promise<any> {
    const res = await fetch(URL);
    const parsed = await res.json();
    const showUser = parsed.map((user: UsersDto) => ({
      name: user.name,
      lastName: user.lastName,
      email: user.email,
    }));
    return showUser;
  }
  async getUserById(id: number): Promise<any> {
    const res = await fetch(`${URL}${id}`);
    const parsed = await res.json();
    return parsed;
  }
  async createUser(user: UsersDto): Promise<any> {
    const id = await this.createId();
    const userId = { id, ...user };
    userId.createdAt = new Date(); 
    userId.updatedAt = new Date(); 
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
  async updateUser(id: number, user: UsersDto): Promise<any> {
    const isUser = await this.getUserById(id);
    if (!Object.keys(isUser).length) return;
    const updateUser = { id, ...user };
    // updateUser.createdAt = user.createdAt;
    updateUser.updatedAt = new Date();
    await fetch(`${URL}${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateUser),
    });
  }
  async deleteUser(id: number): Promise<any> {
    const res = await fetch(`${URL}${id}`, {
      method: 'DELETE',
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
