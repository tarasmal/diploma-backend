import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { HeroEntity, HeroDocument } from './hero.schema';
import {IHeroRepository} from "../../../../domain/ heroes/heroRepository.interface";
import { Hero } from '../../../../domain/ heroes/hero.interface';
import {HeroMapper} from "./hero.mapper";

@Injectable()
export class HeroRepository implements IHeroRepository {
    constructor(
        @InjectModel(HeroEntity.name)
        private readonly heroModel: Model<HeroDocument>,
    ) {}

    async findAll(): Promise<Hero[]> {
        const docs = await this.heroModel.find().exec();
        return HeroMapper.toDomainList(docs);
    }

    async findById(id: number): Promise<Hero | null> {
        const doc = await this.heroModel.findOne({ id }).exec();
        if (!doc) return null;
        return HeroMapper.toDomain(doc);
    }
}
