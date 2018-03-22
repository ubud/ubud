/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { SelfHandling } from '@ubud/ngrx/contracts/self-handling';
import { TodoState } from '../state';
import { Todo } from '../models/todo';
import { Message } from '@ubud/ngrx/message';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
export const ALL_TODOS_FETCHED = 'ALL_TODOS_FETCHED';

export class AllTodosFetched extends Message implements SelfHandling<TodoState> {
    public readonly type: string = ALL_TODOS_FETCHED;

    public todos: Todo[];

    public handle(state: TodoState): TodoState {
        return { ...state, todos: this.todos };
    }
}
