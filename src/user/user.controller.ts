import { Controller, Get, Body, HttpCode, Post, Redirect, Query, Param, Patch, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, ReplaceUserDto, DeleteUserDto, UpdateUserDto } from './dto/index.dto';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get('list')
    async getAll(): Promise<User[]> {
        const list = this.userService.getAll();
        return list;
    }

    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' };
        }
    }

    @Get(':id')
    async getUserWithID(@Param('id') id: string) {
        return this.userService.getUserWithID(id);
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    @Patch('update')
    async update(@Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(updateUserDto);
    }

    @Put('replace/:id')
    async replace(@Param('id') id: string, @Body() replaceCatDto: ReplaceUserDto) {
        return this.userService.replace(id, replaceCatDto);
    }

    @Delete('delete')
    async delete(@Body() deleteUserDto: DeleteUserDto) {
        return `Delete the object: ${this.userService.delete(deleteUserDto)}`;
    }
}
