import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';

import * as dotenv from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';
dotenv.config();

import { User, UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  exports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [DatabaseService],
})
export class DatabaseModule {}
