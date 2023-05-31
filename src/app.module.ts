import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiController } from './api/api.controller';
import { DatabaseController } from './database/database.controller';
import { DatabaseModule } from './database/database.module';
import { ApiService } from './api/api.service';
import { DatabaseService } from './database/database.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, ApiController, DatabaseController],
  providers: [AppService, ApiService, DatabaseService],
})
export class AppModule {}
