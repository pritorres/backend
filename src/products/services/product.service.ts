import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateProductDto } from '../dtos/product.dto';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
  ) {}

  async getAll(): Promise<Product[]> {
    const product = await this.productRepo.find();
    return product;
  }

  async getOne(id: number): Promise<Product> {
    const product = await this.productRepo.findOne(id);
    return product;
  }

  async create(@Body() body: CreateProductDto): Promise<Product> {
    const product = this.productRepo.save(body);
    return await product;
  }

  async delete(id: number): Promise<void> {
    await this.productRepo.delete(id);
  }
}
