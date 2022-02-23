import { Test, TestingModule } from '@nestjs/testing';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { Mail } from './interfaces/mail.interface';

describe('MailController', () => {
  let controller: MailController;
  let service: MailService;

  beforeEach(() => {
    service = new MailService();
    controller = new MailController(service);
  });

  describe('all', () => {
    it('should return an array of mails', async () => {
      const result = [];
      jest.spyOn(service, 'getAll').mockImplementation(async () => result);

      expect(await controller.getAll()).toBe(result);
    });
  });

  describe('', () => {
    it('should craet a mail', async () => {
      const result = { id: 1, email: "duong@gmail.com", password: "12345678", friends: [] };
      jest.spyOn(service, 'create').mockImplementation(async () => result as Mail);

      expect(await controller.create({ id: 1, email: "duong@gmail.com", password: "12345678", friends: [] })).toEqual(result);
    });
  });

  describe(':id', () => {
    it('should return a mail', async () => {
      const result = await controller.create({ id: 1, email: "duong@gmail.com", password: "12345678", friends: [] });
      jest.spyOn(service, 'findWithId').mockImplementation(async () => result as Mail);

      expect(await controller.findWithId({ id: 1 })).toBe(result);
    });
  });
});
