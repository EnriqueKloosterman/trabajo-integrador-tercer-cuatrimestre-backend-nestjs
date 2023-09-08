import { Expose } from 'class-transformer';
import { IsString, IsNotEmpty, IsArray, IsNumber } from 'class-validator';

export class CreateArticleDto {
  @Expose()
  @IsString()
  @IsNotEmpty()
  title: string;

  @Expose()
  @IsArray()
  @IsNotEmpty()
  article: string[];

  @Expose()
  @IsString()
  img: string


  // Añadimos los decoradores IsNumber y IsDate para las nuevas propiedades
  @Expose()
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  createdAt: Date;

  updatedAt: Date;
}
