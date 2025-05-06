import { Controller, Post, Body } from '@nestjs/common';
import {DraftService} from "../application/draft.service";
import {Draft} from "../domain/draft/draft.interface";
import {DraftResponse} from "../domain/draft/draft-response";

@Controller('draft')
export class DraftController {
    constructor(private readonly service: DraftService) {}

    @Post('recommend')
    recommend(@Body() draft: Draft): Promise<DraftResponse> {
        return this.service.recommend(draft);
    }
}