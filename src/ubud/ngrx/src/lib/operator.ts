import { filter } from 'rxjs/operators';
import { OperatorFunction } from 'rxjs';
import { MessageClass } from './types';
import { Message } from './message';

export function ubudType<T>(constructor: MessageClass<T>): OperatorFunction<any, Message<T>> {
    return filter(a => a.TYPE === constructor.TYPE);
}
