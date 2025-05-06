import {HttpModule} from "@nestjs/axios";
import {Module} from "@nestjs/common";
import {RecommendationService} from "../infrastructure/recommendation/recommendation.service";
import {DraftController} from "../presentation/draft.controller";
import {DraftService} from "../application/draft.service";

@Module({
    imports: [HttpModule],
    providers: [
        { provide: 'IDraftRecommendationService', useClass: RecommendationService }, DraftService
    ],
    exports: ['IDraftRecommendationService'],
    controllers: [DraftController],
})
export class DraftRecommendationModule {}
