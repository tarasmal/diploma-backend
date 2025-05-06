import { Hero } from './hero.interface';

export interface IHeroRepository {
    findAll(): Promise<Hero[]>;
    findById(id: number): Promise<Hero | null>;
}