/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Todo } from '../../models/todo';
import { TodoState } from '../../state';
import { messageFactory } from '@ubud/ngrx/message';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
export class TodoAdded extends messageFactory('TODO_ADDED')<TodoState> {
    public todo: Todo;

    public handle(state: TodoState): TodoState {
        return {
            ...state,
            todos: [...state.todos, this.todo],
            processing: false,
            currentTodoForm: {
                data: new Todo({ task: '' }),
                disabled: false,
                pristine: true,
            },
        };
    }
}
