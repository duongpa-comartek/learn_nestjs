import { IsNumberString } from 'class-validator';

export class FindParams {
    @IsNumberString()
    id: number;
}