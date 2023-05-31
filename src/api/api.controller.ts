import { Controller, Get, Post, Req } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}
  @Post('/create-user')
  async createUser(@Req() req) {
    return await this.apiService.createUser(req.body);
  }

  @Get('/get-users')
  async getAllUsers(@Req() req) {
    return await this.apiService.getAllUsers(req.body);
  }
}
