/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Action } from '@ngrx/store';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
export abstract class Message<T> implements Action {
    public static readonly NAME: string = '';
    public readonly type: string;

    public constructor(payload?: object) {
        if (payload) {
            Object.assign(this, payload);
        }
    }

    public get payload(): object {
        return Object.entries(this).reduce(
            (acc: { [key: string]: any }, [key, value]) => {
                if ('type' !== key) {
                    acc[key] = value;
                }

                return acc;
            },
            {},
        );
    }

    public handle(state: T): T {
        throw Error('Message should has handler.');
    }
}

export function messageFactory(messageName: string): typeof Message {
    return class<T> extends Message<T> {
        public static readonly NAME: string = messageName;
        public readonly type: string = messageName;
    };
}
