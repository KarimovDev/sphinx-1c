import { IsString } from 'class-validator';

export class SearchValueParams {
    @IsString()
    searchValue: string;
}
