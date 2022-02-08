import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  category: string;

  @IsBoolean()
  stock: boolean;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
