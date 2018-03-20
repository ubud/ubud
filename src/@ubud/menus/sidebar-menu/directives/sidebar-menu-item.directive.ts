/*
 * This file is part of the Ubud Skeleton package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { ContentChild, Directive, TemplateRef } from '@angular/core';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@Directive({
    selector: '[ubudSidebarMenuItem]',
})
export class SidebarMenuItemDirective {
    @ContentChild(TemplateRef)
    public tpl: TemplateRef<any>;
}
