/*
 * This file is part of the Ubud Skeleton package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { AfterContentInit, Component, ContentChild, Input } from '@angular/core';
import { SidebarMenuComponent } from './sidebar-menu.component';
import { SidebarMenuItemDirective } from '../directives/sidebar-menu-item.directive';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@Component({
    selector: 'ubud-sidebar-menu-item',
    template: `
        <li [ngClass]="{'parent-menu': parentMenu, 'parent-menu-expanded': !collapsed}">
            <a *ngIf="href; else routerItem" [attr.href]="href" (click)="toggle($event)">
                <ng-container *ngTemplateOutlet="menuItem"></ng-container>
            </a>
            <ng-template #routerItem>
                <a [routerLink]="routerLink" [routerLinkActive]="routerLinkActive" (click)="toggle($event)">
                    <ng-container *ngTemplateOutlet="menuItem"></ng-container>
                </a>
            </ng-template>
            <ng-template #menuItem>
                <span class="sidebar-menu-item-label">
                    <ng-template ngFor [ngForOf]="[{title: title, iconClass: iconClass}]" [ngForTemplate]="label ? label.tpl : null">
                        <i class="{{ iconClass }}"></i>
                        {{ title }}
                    </ng-template>
                </span>
            </ng-template>
            <ng-content *ngIf="!collapsed" select="ubud-sidebar-menu"></ng-content>
        </li>
    `,
})
export class SidebarMenuItemComponent implements AfterContentInit {
    @Input()
    public title: string;

    @Input()
    public iconClass: string;

    @Input()
    public routerLink: string | null = null;

    @Input()
    public routerLinkActive: string = 'sidebar-menu-item-active';

    @Input()
    public href: string | null = null;

    @ContentChild(SidebarMenuItemDirective, <any> { descendants: false })
    public label: SidebarMenuItemDirective;

    public collapsed: boolean = false;

    public parentMenu: boolean = false;

    @ContentChild(SidebarMenuComponent)
    private subMenu: SidebarMenuComponent;

    public ngAfterContentInit(): void {
        if (this.subMenu) {
            this.parentMenu = true;
        }
    }

    public toggle(e: MouseEvent): void {
        if (this.parentMenu) {
            this.collapsed = !this.collapsed;
        }
    }
}
