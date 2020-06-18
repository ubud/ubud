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
    selector: 'ubud-user-control',
    template: `
        <ubud-dropdown [(show)]="show">
            <a [class.active]="show" ubudDropdownToggle>
                <img [height]="size" class="rounded-circle" [src]="image" />
            </a>

            <ng-content></ng-content>
        </ubud-dropdown>
    `,
    styleUrls: ['../styles/user-control.scss'],
})
export class UserControlComponent {
    @Input() public size?: number;

    @Input() public image?: string;

    public show: boolean = false;
}
