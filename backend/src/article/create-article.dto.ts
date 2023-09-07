import { Expose } from 'class-transformer';
import { IsString, IsNotEmpty, IsArray } from 'class-validator';

export class CreateArticleDto {
  @Expose()
  @IsString()
  @IsNotEmpty()
  title: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  article: string;
  
  @Expose()
  @IsArray()
  ingredients: string[];
}
