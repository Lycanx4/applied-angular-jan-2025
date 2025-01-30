import { Feature_Handlers } from './feature-handler';
import { NewsHandlers } from './news-handler';

export const handlers = [...NewsHandlers, ...Feature_Handlers];
