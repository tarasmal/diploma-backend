import {Draft} from "../../domain/draft/draft.interface";
import {RecommendationEntity, RecommendationsResponse} from "./recommendations-response";
import {Recommendation} from "../../domain/draft/recommendation";

export interface DraftRequest {
    my_picks:  number[];
    opp_picks: number[];
}


export class RecommendationMapper {

    public static toDomain(dto: RecommendationEntity): Recommendation {
        return {
            heroId: dto.hero_id,
            score:  dto.score,
        };
    }

    public static toDomainList(
        dtos: RecommendationsResponse,
    ): Recommendation[] {
        return dtos.recommendations.map(RecommendationMapper.toDomain);
    }

    public static toRequest(draft: Draft): DraftRequest {
        return {
            my_picks:  draft.myPicks,
            opp_picks: draft.oppPicks,
        }
    }
}