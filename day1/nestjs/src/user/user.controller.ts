import { Controller, Get, Req, HttpCode, Header, Redirect, Query, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get('list')
    async getUsers() {
        const list = this.userService.getUsers();
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
    async getUser(@Param() params) {
        const user = this.userService.getUser(params.id)
        return user;
    }
}
