import { Delete } from '@nestjs/common';
import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { CreateProductDto } from '../dtos/product.dto';
import { Product } from '../entities/product.entity';

import { ProductService } from '../services/product.service';

@Controller('products')
export class ProductController {
  constructor(private productServices: ProductService) {}
  @Get()
  async getAll(): Promise<Product[]> {
    const user = this.productServices.getAll();
    return user;
  }
  @Get(':id')
  async getOne(id: number): Promise<Product> {
    return this.productServices.getOne(id);
  }
  @Post()
  async create(@Body() body: CreateProductDto): Promise<Product> {
    const user = this.productServices.create(body);
    return user;
  }

  @Delete(':id')
  async delete(id: number): Promise<void> {
    return await this.productServices.delete(id);
  }
}
