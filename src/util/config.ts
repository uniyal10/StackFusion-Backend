import * as dotenv from 'dotenv';

dotenv.config();

const CONFIG = {
  PORT: process.env.PORT || 8080,
  MONGO_URI: process.env.MONGO_URI,
  EMAIL: process.env.EMAIL,
  PASSWORD: process.env.PASSWORD,
};

export default CONFIG;
