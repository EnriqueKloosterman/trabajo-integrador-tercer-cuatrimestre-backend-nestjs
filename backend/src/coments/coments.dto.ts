import { Expose } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsInt,
} from 'class-validator';

export class CreateComentsDto {
  @Expose()
  @IsString()
  @IsNotEmpty()
  coment: string;

  @Expose()
  @IsNotEmpty()
  @IsInt()
  user_id: number;

  @Expose()
  @IsNotEmpty()
  @IsNumber()
  recipe_id: number;

  createdAt: Date;

  updatedAt: Date;
}
