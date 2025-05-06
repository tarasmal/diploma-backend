import {Controller, Get, Param} from "@nestjs/common";
import {HeroService} from "../application/hero.service";
import {Hero} from "../domain/ heroes/hero.interface";

@Controller('heroes')
export class HeroController {
    constructor(private readonly service: HeroService) {}

    @Get()
    getAll(): Promise<Hero[]> {
        return this.service.getAllHeroes();
    }

    @Get(':id')
    getById(@Param('id') id: string): Promise<Hero | null> {
        return this.service.getHeroById(Number(id));
    }
}