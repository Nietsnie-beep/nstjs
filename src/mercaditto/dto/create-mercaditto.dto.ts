import { IsInt, IsString, MinLength } from "class-validator";

export class CreateMercadittoDto {

    @IsString()
    @MinLength(3)
    name:string;

    @IsInt()
    sku:number;

    @IsInt()
    price : number;

}
