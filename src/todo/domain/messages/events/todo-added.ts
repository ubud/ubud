import { Message, UbudMessage } from '@ubud/ngrx';

import { Todo } from '../../models/todo';
import { TodoState } from '../../state';

@UbudMessage()
export class TodoAdded extends Message<TodoState> {
    public todo!: Todo;

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
