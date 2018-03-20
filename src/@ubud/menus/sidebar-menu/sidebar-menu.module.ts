/*
 * This file is part of the Ubud Skeleton package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { NgModule } from '@angular/core';
import { SidebarMenuComponent } from '@ubud/menus/sidebar-menu/components/sidebar-menu.component';
import { CommonModule } from '@angular/common';
import { SidebarMenuItemComponent } from '@ubud/menus/sidebar-menu/components/sidebar-menu-item.component';
import { SidebarMenuItemDirective } from '@ubud/menus/sidebar-menu/directives/sidebar-menu-item.directive';
import { RouterModule } from '@angular/router';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [
        SidebarMenuComponent,
        SidebarMenuItemComponent,
        SidebarMenuItemDirective,
    ],
    exports: [
        SidebarMenuComponent,
        SidebarMenuItemComponent,
        SidebarMenuItemDirective,
    ],
})
export class UbudSidebarMenuModule {
}
