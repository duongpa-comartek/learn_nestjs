import { Injectable } from '@nestjs/common';
import data from './user.data'
import { CreateUserDto, DeleteUserDto, UpdateUserDto, ReplaceUserDto } from './dto/index.dto';
import { User } from './interfaces/user.interface'

@Injectable()
export class UserService {
    private readonly listUser: User[] = data.USERS;

    public async getAll(): Promise<User[]> {
        return this.listUser;
    }

    public async getUserWithID(id: string) {
        const user = this.listUser.find(e => e.id === id);
        return user;
    }

    public async createUser(CreateUserDto: CreateUserDto) {
        const userData = CreateUserDto as User;
        try {
            this.listUser.push(userData);
            return userData;
        } catch {
            return false;
        }
    }

    public async update({ id, ...user }: UpdateUserDto) {
        try {
            let data = this.listUser.find(e => e.id === id);
            data.name = user.name;
            data.age = user.age;
            return data;
        } catch {
            return false;
        }
    }

    public async replace(id: string, ReplaceUserDto: ReplaceUserDto) {
        try {
            let index: number = this.listUser.findIndex(e => e.id === id);
            let data: User = this.listUser.find(e => e.id === id);
            this.listUser.splice(index, 1, ReplaceUserDto as User);
            return data;
        } catch {
            return false;
        }
    }

    public async delete({ id, ...user }: DeleteUserDto) {
        try {
            const data: User = this.listUser.find(e => e.id === id);
            const index = this.listUser.indexOf(data);
            this.listUser.splice(index, 1);
            return data;
        } catch {
            return false;
        }

    }
}
