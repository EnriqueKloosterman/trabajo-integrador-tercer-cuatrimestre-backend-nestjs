import { IsNotEmpty, IsString, IsInt, IsArray} from "class-validator";
import { Expose } from "class-transformer";

export class RecipeDto {
    @Expose()
    @IsNotEmpty()
    @IsString()
    title: string;

    @Expose()
    @IsNotEmpty()
    @IsArray()
    description: [];

    @Expose()
    @IsNotEmpty()
    @IsArray()
    ingredients: [];

    @Expose()
    @IsNotEmpty()
    @IsString()
    img: string;

    @Expose()
    @IsNotEmpty()
    @IsInt()
    userId: number;

    createdAt: Date;

    updatedAt: Date;
}