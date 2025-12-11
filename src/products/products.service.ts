import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getProducts() {
    return await this.prismaService.product.findMany();
  }

  async getProductsBySubcategory(name: string) {
    return await this.prismaService.product.findMany({
      where: { subcategoryName: name },
    });
  }

  async getProductById(id: string) {
    const product = await this.prismaService.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  async getProductsByString(str: string) {
    const products = await this.prismaService.product.findMany();
    const searchResults = products.filter(
      (product) =>
        product.name.toLowerCase().includes(str.toLowerCase().trim()) === true,
    );

    return searchResults;
  }
}
