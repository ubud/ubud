/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Action } from '@ngrx/store';
import { Type } from '@angular/core';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
export abstract class Message implements Action {
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

    public abstract handle(state: any): any;
}

export function messageFactory(messageName: string): typeof Message {
    return class extends Message {
        public static readonly NAME: string = messageName;
        public readonly type: string = messageName;

        public handle(state: any): any {
            throw Error('Message should has handler.');
        }
    };
}
