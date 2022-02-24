import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength, MaxLength, ValidateNested, IsArray } from 'class-validator';
import { Mail } from '../interfaces/mail.interface';
import { Type } from 'class-transformer';

export class CreateMailDto {
    @IsNumber()
    readonly id: number;

    @IsEmail({}, {
        message: 'Fail email'
    })
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8, {
        message: 'password is too short',
    })
    @MaxLength(20, {
        message: 'password is too long',
    })
    readonly password: string;

    @ValidateNested({ each: true })
    @Type(() => CreateMailDto)
    readonly friends: Mail[];
}