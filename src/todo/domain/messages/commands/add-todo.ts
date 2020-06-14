import { FormState } from '@ubud/form';
import { Message, UbudMessage } from '@ubud/ngrx';

import { Todo } from '../../models/todo';
import { TodoState } from '../../state';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@UbudMessage()
export class AddTodo extends Message<TodoState> {
    public todo: FormState<Todo>;

    public handle(state: TodoState): TodoState {
        return { ...state, processing: true, currentTodoForm: this.todo };
    }
}
