/*
 * This file is part of the Ubud package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SidebarPage } from '../pages/sidebar.page';
import { TopbarPage } from '../pages/topbar.page';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
const routes: Routes = [
    {
        path: '',
        component: TopbarPage,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'todos',
            },
            {
                path: 'todos',
                loadChildren: '../../../../src/todo/todo.module#TodoModule',
            },
        ],
    },
    {
        path: 'sidebar',
        component: SidebarPage,
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
