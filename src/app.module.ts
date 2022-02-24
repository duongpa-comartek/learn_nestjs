import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MailModule } from './mail/mail.module';
import { AppController } from './app.controller';

@Module({
  imports: [MailModule, UserModule],
  controllers: [AppController]
})

export class AppModule { }
