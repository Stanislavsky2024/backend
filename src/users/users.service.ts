import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUsers() {
    return this.prismaService.user.findMany();
  }

  async getUserById(id: string) {
    return this.prismaService.user.findUnique({ where: { id } });
  }
}
