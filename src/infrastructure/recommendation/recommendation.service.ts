import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import {IDraftRecommendationService} from "../../domain/draft/draft-recommendation.interface";
import {RecommendationsResponse} from "./recommendations-response";
import {Draft} from "../../domain/draft/draft.interface";
import {DraftResponse} from "../../domain/draft/draft-response";
import {RecommendationMapper} from "./recommendation.mapper";
import type { AxiosResponse } from 'axios';
import {ConfigService} from "@nestjs/config";

@Injectable()
export class RecommendationService implements IDraftRecommendationService {
    private readonly logger   = new Logger(RecommendationService.name);
    private readonly endpoint: string;

    constructor(private readonly http: HttpService, private readonly config: ConfigService,) {
        this.endpoint = this.config.get<string>('DRAFT_RECOMMENDATION_URL')!;
    }

    async recommend(draft: Draft): Promise<DraftResponse> {
        this.logger.log(`Sending draft to ${this.endpoint}`);

        const payload = RecommendationMapper.toRequest(draft);

        const response: AxiosResponse<RecommendationsResponse> =
            await firstValueFrom(
                this.http.post<RecommendationsResponse>(
                    this.endpoint,
                    payload,
                    { timeout: 5000 },
                ),
            );
        this.logger.log(`Received ${response.data.recommendations.length} recommendations`);

        const recs = RecommendationMapper.toDomainList(response.data);
        return { recommendations: recs };
    }
}
