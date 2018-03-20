/*
 * This file is part of the Ubud Skeleton package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { NgModule } from '@angular/core';
import { SidebarLayout } from '@ubud/template/components/layout/sidebar.layout';
import { SidebarModule } from 'ng-sidebar';
import { NgMediacheckModule } from 'ng-mediacheck';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgMediacheckModule.forRoot(),
        SidebarModule,
    ],
    declarations: [
        SidebarLayout,
    ],
    exports: [
        SidebarLayout,
    ],
})
export class UbudSidebarTemplateModule {
}
