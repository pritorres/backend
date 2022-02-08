import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos.ts/user.dto';

import { User } from '../entities/user.entity';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(private userServices: UserService) {}
  @Get()
  async getAll(): Promise<User[]> {
    const user = this.userServices.getAll();
    return user;
  }

  @Get(':id')
  async getOne(id: number): Promise<User> {
    const user = this.userServices.getOne(id);
    return user;
  }

  @Post()
  async createUser(@Body() body: CreateUserDto): Promise<User> {
    const user = this.userServices.create(body);
    return user;
  }
}
