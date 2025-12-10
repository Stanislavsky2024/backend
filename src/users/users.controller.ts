import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getUsers() {
    return await this.usersService.getUsers();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async getSubcategoriesByCategory(@Param('id') id: string) {
    return await this.usersService.getUserById(id);
  }
}
