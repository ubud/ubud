/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { TodoState } from './state';
import { Message } from 'src/@ubud/ngrx/message';
import { createReducer } from '@ubud/ngrx/reducer';
import { Todos } from './messages/documents/todos';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
const INITIAL_STATE = { todos: [], processing: false, currentTodoForm: null };

const reducer = createReducer<TodoState>([Todos]);

export function todoReducer(state: TodoState = INITIAL_STATE, action: Message<TodoState>): TodoState {
    return reducer(state, action);
}
