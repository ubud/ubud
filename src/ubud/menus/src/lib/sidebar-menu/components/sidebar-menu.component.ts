/*
 * This file is part of the Ubud Skeleton package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Component, Input } from '@angular/core';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@Component({
    selector: 'ubud-sidebar-menu',
    template: `
        <a (click)="toggle()" class="sidebar-title" *ngIf="!!title">
            <span>{{ title }}</span>
            <span *ngIf="collapsible">
                <i *ngIf="!collapsed" class="fa fa-minus"></i>
                <i *ngIf="collapsed" class="fa fa-plus"></i>
            </span>
        </a>
        <ul *ngIf="!collapsed">
            <ng-content select="ubud-sidebar-menu-item"></ng-content>
        </ul>
    `,
    styleUrls: ['../styles/sidebar-menu.scss'],
})
export class SidebarMenuComponent {
    @Input() public collapsible = true;
    @Input() public title: string;
    @Input() public collapsed = false;

    public toggle(): void {
        if (this.collapsible) {
            this.collapsed = !this.collapsed;
        }
    }
}
