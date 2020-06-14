/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UbudFormModule } from '@ubud/form';
import { UbudLoaderModule } from '@ubud/loader';

import { TodoListComponent } from './components/todo-list.component';
import { TodoForm } from './components/todo.form';
import { TodoContainer } from './containers/todo.container';
import { TodoPage } from './pages/todo.page';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@NgModule({
    imports: [CommonModule, UbudFormModule, UbudLoaderModule],
    declarations: [TodoForm, TodoContainer, TodoListComponent, TodoPage],
    exports: [TodoForm, TodoContainer, TodoListComponent],
})
export class UbudTodoViewModule {}
