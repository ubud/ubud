/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Message } from './message';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
export interface MessageClass<T> {
    new(...args: any[]): Message<T>;
    NAME: string;
}

export function createReducer<T>(messages: MessageClass<T>[]): (state: T, message: Message<T>) => T {
    const cache: { [key: string]: boolean } = messages.reduce(
        (acc, cur) => {
            acc[cur.NAME] = true;

            return acc;
        },
        <any>{},
    );

    return (state: T, message: Message<T>) => {
        if (cache[message.type]) {
            return message.handle(state);
        }

        return state;
    };
}
