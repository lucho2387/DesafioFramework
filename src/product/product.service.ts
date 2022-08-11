import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../interfaces/product.interface';
import { CreateProductDto } from 'src/dto/create-product.dto';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [];

  constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}


  async create(createProductDTO: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(createProductDTO);
    return newProduct.save();
  }

  async findAll(): Promise<Product[]> {
    const products = await this.productModel.find();
    return products;
  }

  async getProduct(id: string): Promise<Product> {
    const product = await this.productModel.findById({ _id: id }); 
    return product;
  }
  
  async deleteProduct(id: string): Promise<any> {
    const deletedProduct = await this.productModel.findOneAndDelete({ _id: id });
    return deletedProduct;
  }

  async updateProduct(id: string, createProductDTO: CreateProductDto): Promise<Product> {
      const updatedProduct = await this.productModel
                          .findByIdAndUpdate({ _id: id }, createProductDTO, {new: true});
      return updatedProduct;
  }
}
