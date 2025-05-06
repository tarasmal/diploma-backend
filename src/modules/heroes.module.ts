import {HeroController} from "../presentation/hero.controller";
import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {HeroEntity, HeroSchema} from "../infrastructure/persistence/mongoose/hero/hero.schema";
import {HeroRepository} from "../infrastructure/persistence/mongoose/hero/hero.repository";
import {HeroService} from "../application/hero.service";
import {LoggingModule} from "./logging.module";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: HeroEntity.name, schema: HeroSchema }]), LoggingModule,
    ],
    providers: [
        { provide: 'IHeroRepository', useClass: HeroRepository },
        HeroService,
    ],
    controllers: [HeroController],
})
export class HeroModule {}