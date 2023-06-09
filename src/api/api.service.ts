import { BadRequestException, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
// var nodemailer = require('nodemailer');
// import CONFIG from 'src/util/config';

@Injectable()
export class ApiService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createUser(user) {
    try {
      if (!user?.name || !user?.email || !user?.phone_number || !user?.dob)
        throw new Error('Please fill all the fields');

      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(user?.email))
        throw new Error('Invalid Email!');
      if (
        !/^\d+$/.test(user.phone_number) ||
        user.phone_number.length < 10 ||
        user.phone_number.length > 10
      )
        throw new Error('Invalid phone number!');

      const res: any = new this.databaseService.userModal(user).save();

      return res;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  async getAllUsers(user) {
    return await this.databaseService.userModal.find().sort({ _id: -1 });
  }
}
