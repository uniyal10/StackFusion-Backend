import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  dob: Date;

  @Prop({ required: true })
  phone_number: string;

  @Prop({ required: true })
  email: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
