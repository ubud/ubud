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
import { DropdownComponent } from './components/dropdown.component';
import { DropdownToggleDirective } from './directives/dropdown-toggle.directive';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@NgModule({
    imports: [CommonModule],
    declarations: [DropdownComponent, DropdownToggleDirective],
    exports: [DropdownComponent, DropdownToggleDirective],
})
export class UbudDropdownModule {}
