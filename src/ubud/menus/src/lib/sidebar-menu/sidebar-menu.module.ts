/*
 * This file is part of the Ubud Skeleton package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarMenuComponent } from './components/sidebar-menu.component';
import { SidebarMenuItemComponent } from './components/sidebar-menu-item.component';
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
