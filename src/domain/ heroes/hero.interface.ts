import {PrimaryAttribute} from "./hero.types";

export interface Hero {
    id: number;
    heroId: number;
    name: string;
    primaryAttribute: PrimaryAttribute;
    img: string;
}