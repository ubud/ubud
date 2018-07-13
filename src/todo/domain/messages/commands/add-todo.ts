import { TodoState } from '../../state';
import { Todo } from '../../models/todo';
import { Message, UbudMessage } from '@ubud/ngrx';
import { FormState } from '@ubud/form';

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
