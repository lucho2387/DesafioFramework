import { Module } from '@nestjs/common';
import { ProductsController } from './product.controller';
import { ProductsService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose'
import { ProductSchema } from '../schemas/product.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Product', schema: ProductSchema}])
  ],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductModule {}
