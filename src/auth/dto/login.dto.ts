import { Transform } from "class-transformer";
import { IsEmail, MinLength, IsString } from "class-validator";

export class loginDto{
    
    @IsEmail()
    email:string;

    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(5)
    password: string
}