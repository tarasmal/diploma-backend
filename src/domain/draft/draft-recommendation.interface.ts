import {DraftResponse} from "./draft-response";
import {Draft} from "./draft.interface";

export interface IDraftRecommendationService {
    recommend(draft: Draft): Promise<DraftResponse>;
}