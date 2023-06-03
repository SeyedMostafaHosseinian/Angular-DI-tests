import {InjectionToken} from "@angular/core";
import {LoggerService} from "../../logger.service";

export const LOGGER_SERVICE_TOKEN = new InjectionToken<LoggerService>('for ite-example');
