import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Body,
  Param,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getProducts() {
    return await this.productsService.getProducts();
  }

  @Get('/search/:string')
  @HttpCode(HttpStatus.OK)
  async getProductsByString(@Param('string') str: string) {
    return await this.productsService.getProductsBySubcategory(str);
  }

  @Get('/subcategory/:name')
  @HttpCode(HttpStatus.OK)
  async getProductsBySubcategory(@Param('name') name: string) {
    return await this.productsService.getProductsBySubcategory(name);
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async getProductById(@Param('id') id: string) {
    return await this.productsService.getProductById(id);
  }
}
