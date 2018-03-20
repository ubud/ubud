/*
 * This file is part of the Ubud Skeleton package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Component, Input, OnInit } from '@angular/core';
import { MediacheckService } from 'ng-mediacheck';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@Component({
    selector: 'ubud-sidebar-layout',
    templateUrl: './sidebar.layout.html',
    styleUrls: ['../../styles/sidebar-layout.scss'],
})
export class SidebarLayout implements OnInit {
    @Input()
    public sidebarSize: string;

    @Input()
    public dockSize: string;

    @Input()
    public docked: boolean = false;

    @Input()
    public brandRoute: string | null = null;

    public sidebarOpen: boolean = false;
    public small: boolean = false;

    public constructor(private mediacheck: MediacheckService) {
        this.mediacheck.initSubject();
    }

    public ngOnInit(): void {
        this.mediacheck.mq$.subscribe((mq: any) => {
            this.small = 'small' === mq;
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
