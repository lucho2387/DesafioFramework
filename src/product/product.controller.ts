import { Controller, Post, Res, HttpStatus, Body, Get, Param, NotFoundException, Delete, Query, Put } from '@nestjs/common';
import { ProductsService } from './product.service';
import { CreateProductDto } from '../dto/create-product.dto';

@Controller()
export class ProductsController {

  constructor(private readonly productsService: ProductsService) {}
  
    @Post('/product')
    async create(@Res() res, @Body() createProductDTO: CreateProductDto) {
        const product = await this.productsService.create(createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: 'El producto fue creado correctamente',
            product
        });
    }

    @Get('/products')
    async findAll(@Res() res) {
        const products = await this.productsService.findAll();
        return res.status(HttpStatus.OK).json(products);
    }

    @Get('/:id')
    async getProduct(@Res() res, @Param('id') id: string) {
        const product = await this.productsService.getProduct(id);
        if (!product) throw new NotFoundException('El producto no se pudo encontrar!');
        return res.status(HttpStatus.OK).json(product);
    }

    @Delete('/:id')
    async deleteProduct(@Res() res, @Param('id') id: string) {
        const productDeleted = await this.productsService.deleteProduct(id);
        if (!productDeleted) throw new NotFoundException('El producto no se pudo encontrar!');
        return res.status(HttpStatus.OK).json({
            message: 'El Producto fue eliminado correctamente',
            productDeleted
        });
    }

    
    @Put('/:id')
    async updateProduct(@Res() res, @Body() createProductDTO: CreateProductDto, @Param('id') id: string) {
        const updatedProduct = await this.productsService.updateProduct(id, createProductDTO);
        if (!updatedProduct) throw new NotFoundException('El producto no se pudo encontrar!');
        return res.status(HttpStatus.OK).json({
            message: 'El Producto fue actualizado correctamente',
            updatedProduct 
        });
    }
    
}
