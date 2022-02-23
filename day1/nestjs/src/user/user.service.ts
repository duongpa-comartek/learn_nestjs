import { Injectable } from '@nestjs/common';
import data from './user.data'

@Injectable()
export class UserService {
    private listUser = data;
    public async getUsers() {
        return this.listUser.USERS;
    }
    public async getUser(id: string) {
        const user = this.listUser.USERS.find(e => e.id === id);
        return user;
    }
}
