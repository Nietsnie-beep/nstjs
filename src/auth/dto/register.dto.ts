import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength, ValidationArguments, ValidationOptions, registerDecorator } from "class-validator";


  
export class RegisterDto{
    @IsString()
    userName:string;

    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(5)
    password:string;

    @IsString()
    name:string;

    @IsEmail()

    email:string;

}