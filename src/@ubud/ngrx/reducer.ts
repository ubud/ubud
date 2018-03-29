/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Action } from './action';
import { Action as NgrxAction } from '@ngrx/store';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
export function createReducer<T>(state: T, action: Action|NgrxAction): T {
    if (action instanceof Action) {
        return action.handle(state);
    }

    return state;
}
