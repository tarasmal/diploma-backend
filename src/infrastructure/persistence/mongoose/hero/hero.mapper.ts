import { HeroDocument } from './hero.schema';
import {Hero} from "../../../../domain/ heroes/hero.interface";

export class HeroMapper {
    static toDomain(doc: HeroDocument): Hero {
        return {
            id: doc.id,
            heroId: doc.hero_id,
            name: doc.localized_name,
            primaryAttribute: doc.primary_attr,
            img: doc.img,
        };
    }

    static toDomainList(docs: HeroDocument[]): Hero[] {
        return docs.map(HeroMapper.toDomain);
    }
}
