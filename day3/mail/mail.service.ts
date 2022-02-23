import { Injectable } from '@nestjs/common';
import { CreateMailDto, FindParams } from './dto/index';
import { Mail } from './interfaces/mail.interface'

@Injectable()
export class MailService {
    listMail: Mail[] = [];

    public async getAll() {
        return this.listMail;
    }

    public async findWithId(param: FindParams) {
        const id: number = +param.id;
        console.log(typeof id);
        const mail = this.listMail.find(e => e.id === id);
        console.log(param);
        return mail;
    }

    public async create(CreateMailDto: CreateMailDto) {
        const mailData = CreateMailDto as Mail;
        try {
            this.listMail.push(mailData);
            console.log(`Create: ${JSON.stringify(mailData)}`);
            return mailData;
        } catch {
            return false;
        }
    }
}
