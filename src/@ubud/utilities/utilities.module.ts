/*
 * This file is part of the Ubud Skeleton package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { NgModule } from '@angular/core';
import { ComponentService } from './services/component.service';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@NgModule({
    providers: [
        ComponentService,
    ],
})
export class UbudUtilitiesModule {
}
