/*
 * This file is part of the Ubud Skeleton package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { AfterViewInit, ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { positionService } from '@ubud/utilities';

import { TooltipOptions } from '../models/tooltip-options';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@Component({
    selector: 'ubud-tooltip',
    template: `
        <div
            class="tooltip bs-tooltip-{{ placement }}"
            role="tooltip"
            [ngStyle]="{ top: top, left: left, display: display }"
            [ngClass]="classes"
        >
            <div class="arrow"></div>
            <div class="tooltip-inner" *ngIf="content">
                {{ content }}
            </div>
        </div>
    `,
    styleUrls: ['../styles/tooltip.scss'],
})
export class TooltipComponent implements AfterViewInit {
    public classes: any;
    public top = '-1000px';
    public left = '-1000px';
    public display = 'block';
    public content: string;
    public placement: 'top' | 'bottom' | 'left' | 'right';

    private readonly hostEl: ElementRef;
    private readonly appendToBody: boolean;

    public constructor(private readonly el: ElementRef, private readonly cdr: ChangeDetectorRef, private readonly options: TooltipOptions) {
        Object.assign(this, options);
        this.classes = { 'scale-in': false, in: false };
        this.classes[options.placement] = true;
        this.classes[`tooltip-${options.placement}`] = true;
    }

    public ngAfterViewInit(): void {
        const pos = positionService.positionElements(
            this.hostEl.nativeElement,
            this.el.nativeElement.children[0],
            String(this.placement).toString(),
            this.appendToBody,
        );

        this.top = pos.top + 'px';
        this.left = pos.left + 'px';

        this.classes['scale-in'] = true;
        this.classes['in'] = true;

        this.cdr.detectChanges();
    }
}
