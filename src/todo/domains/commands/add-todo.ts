/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Message, SelfHandling } from '@ubud/ngrx';
import { TodoState } from '../state';
import { Todo } from '../models/todo';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
export class AddTodo extends Message implements SelfHandling<TodoState> {
    public readonly type: string = 'ADD_TODO';

    public todo: Todo;

    public handle(state: TodoState): TodoState {
        return { ...state, todos: [...state.todos, this.todo] };
    }
}
