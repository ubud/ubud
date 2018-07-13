import { Message } from './message';
import { MessageClass } from './types';

export function createReducer<S>(...messages: MessageClass<S>[]): (state: S, action: Message<S, any>) => S {
    const cache: Record<symbol, boolean> = messages.reduce((acc, cur) => {
        acc[cur.TYPE] = true;

        return acc;
    }, {});

    return (state: S, action: Message<S, any>) => {
        if (cache[action.TYPE]) {
            return action.handle(state);
        }

        return state;
    };
}
