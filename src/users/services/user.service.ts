import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dtos.ts/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async getAll(): Promise<User[]> {
    const user = this.userRepo.find();
    return user;
  }

  async getOne(id: number): Promise<User> {
    const user = this.userRepo.findOne(id);
    return user;
  }

  async create(@Body() body: CreateUserDto): Promise<User> {
    const user = this.userRepo.save(body);
    return user;
  }
}
