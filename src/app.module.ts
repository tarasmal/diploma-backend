import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {HeroModule} from "./modules/heroes.module";
import {LoggingModule} from "./modules/logging.module";
import {DraftRecommendationModule} from "./modules/draft.module";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot('mongodb://localhost:27017/dota', { dbName: 'dota' }),
    LoggingModule,
    HeroModule,
    DraftRecommendationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
