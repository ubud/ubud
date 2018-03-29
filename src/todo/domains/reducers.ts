/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { TodoState } from './state';
import { Action } from '@ubud/ngrx/action';
import { createReducer } from '@ubud/ngrx/reducer';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
const INITIAL_STATE = { todos: [] };
export function todoReducer(state: TodoState = INITIAL_STATE, action: Action): TodoState {
    return createReducer<TodoState>(state, action);
}
