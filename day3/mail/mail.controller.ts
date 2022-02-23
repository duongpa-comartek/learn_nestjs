import { Controller, Get, Body, HttpCode, Post, Redirect, Query, Param, Patch, Put, Delete } from '@nestjs/common';
import { MailService } from './mail.service';
import { ValidationPipe, UsePipes } from '@nestjs/common';
import { CreateMailDto, FindParams } from './dto/index';

@Controller('mail')
export class MailController {
    constructor(private mailService: MailService) { }

    @Get('all')
    async getAll() {
        return this.mailService.getAll();
    }

    @Get(':id')
    // @UsePipes(new ValidationPipe({ transform: true }))
    async findWithId(@Param() param: FindParams) {
        return this.mailService.findWithId(param);
    }

    @Post()
    // @UsePipes(new ValidationPipe({ transform: true }))
    async create(@Body() createMailDto: CreateMailDto) {
        return this.mailService.create(createMailDto);
    }
}
