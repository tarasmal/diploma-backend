import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {PrimaryAttribute} from "../../../../domain/ heroes/hero.types";

export type HeroDocument = HeroEntity & Document;

@Schema({ collection: 'heroes' })
export class HeroEntity {
    @Prop() id: number;
    @Prop() hero_id: number;
    @Prop() localized_name: string;
    @Prop() primary_attr: PrimaryAttribute;
    @Prop() img: string;
}

export const HeroSchema = SchemaFactory.createForClass(HeroEntity);