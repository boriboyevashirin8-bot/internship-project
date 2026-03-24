import { IsNotEmpty, IsObject, IsString } from "class-validator";



export class CreateFieldDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsObject()
    @IsNotEmpty()
    boundary:{
        type: "Polygon",
        coordinates: number[][][]
    }
}
