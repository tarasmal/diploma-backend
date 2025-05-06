import {Inject, Injectable} from '@nestjs/common';
import {IHeroRepository} from "../domain/ heroes/heroRepository.interface";
import {Hero} from "../domain/ heroes/hero.interface";

@Injectable()
export class HeroService {
    constructor(
        @Inject('IHeroRepository')
        private readonly repo: IHeroRepository,
    ) {}

    getAllHeroes(): Promise<Hero[]> {
        return this.repo.findAll();
    }

    getHeroById(id: number): Promise<Hero | null> {
        return this.repo.findById(id);
    }
}