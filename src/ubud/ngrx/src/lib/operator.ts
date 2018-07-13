import { filter } from 'rxjs/operators';
import { OperatorFunction } from 'rxjs';
import { MessageClass } from './types';

export function ubudType<T extends MessageClass<any>>(constructor: T): OperatorFunction<any, T> {
    return filter(a => a.TYPE === constructor.TYPE);
}
