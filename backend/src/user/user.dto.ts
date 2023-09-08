import { IsNotEmpty, IsString, IsInt, IsEmail} from "class-validator";
import { Expose } from "class-transformer";

export class UsersDto {
    @Expose()
    @IsNotEmpty()
    @IsString()
    name: string;

    @Expose()
    @IsNotEmpty()
    @IsString()
    lastName: string;

    @Expose()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Expose()
    @IsNotEmpty()
    @IsString()
    password: string;
    
    @Expose()
    @IsNotEmpty()
    @IsInt()
    userType: string;

    createdAt: Date;

    updatedAt: Date;


}