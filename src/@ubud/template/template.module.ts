/*
 * This file is part of the Ubud Skeleton package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { NgModule } from '@angular/core';
import { UbudSidebarTemplateModule } from './sidebar-template.module';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@NgModule({
    imports: [
        UbudSidebarTemplateModule,
    ],
    exports: [
        UbudSidebarTemplateModule,
    ],
})
export class UbudTemplateModule {
}
