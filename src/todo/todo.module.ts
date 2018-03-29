/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoPage } from './pages/todo.page';
import { TodoListComponent } from './components/todo-list.component';
import { routing } from './todo.routes';
import { TodoStore } from './domains/store';
import { TodoInputComponent } from './components/todo-input.component';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './domains/effects';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './domains/reducers';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('todo', todoReducer),
        EffectsModule.forFeature([
            TodosEffects,
        ]),
        routing,
    ],
    providers: [
        TodoStore,
    ],
    declarations: [
        TodoPage,
        TodoListComponent,
        TodoInputComponent,
    ],
    exports: [
        TodoPage,
    ],
})
export class TodoModule {
}
