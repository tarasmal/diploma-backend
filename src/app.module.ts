import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {HeroModule} from "./modules/heroes.module";
import {LoggingModule} from "./modules/logging.module";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/dota', { dbName: 'dota' }),
    LoggingModule,
    HeroModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
