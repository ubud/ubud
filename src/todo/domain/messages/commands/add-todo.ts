/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { TodoState } from '../../state';
import { Todo } from '../../models/todo';
import { FormState } from '@ubud/form/contracts/form-state';
import { messageFactory } from '@ubud/ngrx/message';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
export class AddTodo extends messageFactory('ADD_TODO') {
    public todo: FormState<Todo>;

    public handle(state: TodoState): TodoState {
        return { ...state, processing: true, currentTodoForm: this.todo };
    }
}
