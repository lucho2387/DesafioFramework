import { Document } from "mongoose";

export interface Product extends Document{
    readonly nombre: string;
  
    readonly descripcion: string;
  
    readonly codigo: number;

    readonly imagen: string;
  
    readonly precio: number;

    readonly stock: number;
}
