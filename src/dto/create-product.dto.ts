import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
    @ApiProperty()
    readonly nombre: string;

    @ApiProperty()
    readonly descripcion: string;

    @ApiProperty()
    readonly codigo: number;

    @ApiProperty()
    readonly imagen: string;

    @ApiProperty()
    readonly precio: number;
    
    @ApiProperty()
    readonly stock: number;
}