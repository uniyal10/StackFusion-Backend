import { BadRequestException, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ApiService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createUser(user) {
    try {
      console.log(user.phone_number.length);
      if (!/^\d+$/.test(user.phone_number) || user.phone_number.length < 10)
        throw new Error('Invalid phone number!');

      return new this.databaseService.userModal(user).save();
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  async getAllUsers(user) {
    return await this.databaseService.userModal.find();
  }
}
