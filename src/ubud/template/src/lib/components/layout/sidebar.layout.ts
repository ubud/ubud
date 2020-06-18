/*
 * This file is part of the Ubud Skeleton package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@Component({
    selector: 'ubud-sidebar-layout',
    templateUrl: './sidebar.layout.html',
    styleUrls: ['../../styles/sidebar-layout.scss'],
})
export class SidebarLayout implements OnInit {
    @Input() public sidebarSize?: string;

    @Input() public dockSize?: string;

    @Input() public docked: boolean = false;

    @Input() public brandRoute: string | null = null;

    @Input() public enabled: boolean = true;

    public sidebarOpen: boolean = false;
    public small: boolean = false;

    public constructor(private readonly breakpointObserver: BreakpointObserver) {}

    public ngOnInit(): void {
        this.breakpointObserver.observe('(max-width: 767px)').subscribe(({ matches }) => {
            this.small = matches;
            this.sidebarOpen = !this.small;

            if (this.small) {
                this.docked = false;
            }
        });
    }

    public toggle(): void {
        this.sidebarOpen = !this.sidebarOpen;
    }

    public toggleDock(): void {
        if (!this.small) {
            this.docked = !this.docked;
        }
    }
}
