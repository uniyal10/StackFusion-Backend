import { Injectable } from '@nestjs/common';
import { UserDocument, User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectModel(User.name)
    public userModal: Model<UserDocument>,
  ) {}
}
