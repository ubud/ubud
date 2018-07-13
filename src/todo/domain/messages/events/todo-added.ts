import { Todo } from '../../models/todo';
import { TodoState } from '../../state';
import { Message, UbudMessage } from '@ubud/ngrx';

@UbudMessage()
export class TodoAdded extends Message<TodoState> {
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
