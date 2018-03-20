/*
 * This file is part of the Ubud Skeleton package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Directive, EventEmitter, HostListener } from '@angular/core';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@Directive({
    selector: '[ubudDropdownToggle]',
})
export class DropdownToggleDirective {
    public toggled: EventEmitter<MouseEvent> = new EventEmitter();

    @HostListener('click', ['$event'])
    public onClick(e: MouseEvent): void {
        this.toggled.emit(e);
    }
}
