/*
 * This file is part of the Ubud Skeleton package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SidebarMenuItemComponent } from './components/sidebar-menu-item.component';
import { SidebarMenuComponent } from './components/sidebar-menu.component';
import { SidebarMenuItemDirective } from './directives/sidebar-menu-item.directive';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [SidebarMenuComponent, SidebarMenuItemComponent, SidebarMenuItemDirective],
    exports: [SidebarMenuComponent, SidebarMenuItemComponent, SidebarMenuItemDirective],
})
export class UbudSidebarMenuModule {}
