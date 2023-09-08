import { Expose } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsDate,
} from 'class-validator';

export class CreateComentsDto {
  @Expose()
  @IsString()
  @IsNotEmpty()
  coment: string;

  @Expose()
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @Expose()
  @IsNumber()
  @IsNotEmpty()
  recipeId: number;

  createdAt: Date;

  updatedAt: Date;
}
