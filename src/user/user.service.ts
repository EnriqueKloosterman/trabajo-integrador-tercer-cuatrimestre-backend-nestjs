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
}
