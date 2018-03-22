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
export abstract class Message implements Action {
    public abstract readonly type: string;

    public constructor(payload?: object) {
        if (payload) {
            Object.assign(this, payload);
        }
    }

    public get payload(): object {
        return Object.entries(this).reduce(
            (acc: {[key: string]: any}, [key, value]) => {
                if ('type' !== key) {
                    acc[key] = value;
                }

                return acc;
            },
            {},
        );
    }
}
