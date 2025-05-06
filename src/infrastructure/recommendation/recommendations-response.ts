export interface RecommendationsResponse {
    recommendations: RecommendationEntity[]
}

export interface RecommendationEntity {
    hero_id: number;
    score:   number;
}