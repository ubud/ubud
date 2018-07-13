import { Component, Input } from '@angular/core';
import { Todo } from '../../domain/models/todo';
import { FormComponent, FormState } from '@ubud/form';

@Component({
    selector: 'ubud-todo-form',
    template: `
    <form [formGroup]="form.formGroup" (ngSubmit)="onSubmit()" [ubudForm]="todo" novalidate>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label for="task">Task</label>
            <input class="form-control" name="task" id="task" formControlName="task"/>
            <ubud-form-error [control]="form.formGroup.get('task')" [rules]="form.rules"></ubud-form-error>
          </div>
        </div>
      </div>

      <input type="submit" style="display: none"/>
    </form>
  `,
})
export class TodoForm extends FormComponent<Todo> {
    @Input() public todo: FormState<Todo>;
}
