import { Injectable, Inject } from '@nestjs/common';
import {IDraftRecommendationService} from "../domain/draft/draft-recommendation.interface";
import {Draft} from "../domain/draft/draft.interface";
import {DraftResponse} from "../domain/draft/draft-response";

@Injectable()
export class DraftService {

    constructor(
        @Inject('IDraftRecommendationService')
        private readonly recommender: IDraftRecommendationService,
    ) {
    }

    recommend(draft: Draft): Promise<DraftResponse> {
        return this.recommender.recommend(draft);
    }
}
