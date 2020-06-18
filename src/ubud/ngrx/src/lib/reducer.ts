import { Message } from './message';
import { MessageClass } from './types';

export function createReducer<S>(...messages: Array<MessageClass<S>>): (state: S, action: Message<S>) => S {
    const cache: Record<symbol, boolean> = messages.reduce((acc, cur) => {
        Object.assign(acc, { [cur.TYPE]: true });

        return acc;
    }, {} as Record<symbol, boolean>);

    return (state: S, action: Message<S>) => {
        if (Object.hasOwnProperty(action.TYPE)) {
            return action.handle(state);
        }

        return state;
    };
}
