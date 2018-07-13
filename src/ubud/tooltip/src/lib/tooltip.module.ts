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
import { TooltipComponent } from './components/tooltip.component';
import { TooltipDirective } from './directives/tooltip.directive';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@NgModule({
    imports: [CommonModule],
    declarations: [TooltipComponent, TooltipDirective],
    exports: [TooltipComponent, TooltipDirective],
    entryComponents: [TooltipComponent],
})
export class UbudTooltipModule {}
