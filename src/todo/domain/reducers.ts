/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { TodoState } from './state';
import { Todos } from './messages/documents/todos';
import { AddTodo } from './messages/commands/add-todo';
import { TodoAdded } from './messages/events/todo-added';
import { createReducer, Message } from '@ubud/ngrx';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
const INITIAL_STATE = { todos: [], processing: false, currentTodoForm: null };

const reducer = createReducer<TodoState>(Todos, AddTodo, TodoAdded);

export function todoReducer(state: TodoState = INITIAL_STATE, action: Message<TodoState>): TodoState {
    return reducer(state, action);
}
