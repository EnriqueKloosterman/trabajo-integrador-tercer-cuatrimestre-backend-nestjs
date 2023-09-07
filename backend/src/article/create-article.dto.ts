import { Expose } from 'class-transformer';
import { IsString, IsNotEmpty, IsArray, IsNumber, IsDate } from 'class-validator';

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

  // Añadimos los decoradores IsNumber y IsDate para las nuevas propiedades
  @Expose()
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @Expose()
  @IsDate()
  @IsNotEmpty()
  createdAt: Date;

  @Expose()
  @IsDate()
  @IsNotEmpty()
  updatedAt: Date;
}
