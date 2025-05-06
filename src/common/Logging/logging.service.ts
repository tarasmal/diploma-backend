import { Injectable, Logger, LoggerService as LS } from '@nestjs/common';

@Injectable()
export class LoggingService implements LS {
    private readonly logger = new Logger(LoggingService.name);

    log(message: string) {
        this.logger.log(message);
    }
    error(message: string, trace: string) {
        this.logger.error(message, trace);
    }
    warn(message: string) {
        this.logger.warn(message);
    }
    debug(message: string) {
        this.logger.debug(message);
    }
    verbose(message: string) {
        this.logger.verbose(message);
    }
}
