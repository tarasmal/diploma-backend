import {Global, Module} from '@nestjs/common';
import { LoggingService } from '../common/Logging/logging.service';
import {APP_INTERCEPTOR} from "@nestjs/core";
import {LoggingInterceptor} from "../common/Logging/logging.interceptor";

@Global()
@Module({
    providers: [
        LoggingService,
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggingInterceptor
        }
    ],
    exports: [LoggingService],
})
export class LoggingModule {}