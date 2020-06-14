/*
 * This file is part of the Ubud Skeleton package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { ElementRef } from '@angular/core';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
export class TooltipOptions {
    public placement: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
    public content?: string;
    public appendToBody?: boolean;
    public hostEl?: ElementRef;

    public constructor(options: TooltipOptions) {
        Object.assign(this, options);
    }
}
