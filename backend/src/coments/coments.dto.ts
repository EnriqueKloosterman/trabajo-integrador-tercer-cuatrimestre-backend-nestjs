import { Expose } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';

export class CreateComentsDto {
  @Expose()
  @IsString()
  @IsNotEmpty()
  coment: string;

  @Expose()
  @IsNotEmpty()
  @IsNumber()
  user_id: number;

  @Expose()
  @IsNotEmpty()
  @IsNumber()
  recipe_id: number;

  createdAt: Date;

  updatedAt: Date;
}
