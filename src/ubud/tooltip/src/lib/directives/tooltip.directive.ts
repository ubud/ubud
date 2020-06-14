/*
 * This file is part of the Ubud Skeleton package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {
    ChangeDetectorRef,
    ComponentRef,
    Directive,
    EventEmitter,
    HostListener,
    Input,
    Output,
    ReflectiveInjector,
    ViewContainerRef,
} from '@angular/core';
import { ComponentService } from '@ubud/utilities';

import { TooltipComponent } from '../components/tooltip.component';
import { TooltipOptions } from '../models/tooltip-options';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@Directive({
    selector: '[ubudTooltip]',
})
export class TooltipDirective {
    @Input('ubudTooltip') public content: string;

    @Input('tooltipPlacement') public placement: any = 'top';

    @Input() public appendToBody = false;

    @Output() public tooltipStateChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

    private visible = false;
    private tooltip: ComponentRef<any>;

    public constructor(
        private readonly viewContainerRef: ViewContainerRef,
        private readonly componentService: ComponentService,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) {}

    @HostListener('focusin')
    @HostListener('mouseenter')
    public show(): void {
        if (this.visible) {
            return;
        }

        this.showTooltip();
    }

    @HostListener('focusout')
    @HostListener('mouseleave')
    public hide(): void {
        if (!this.visible) {
            return;
        }

        this.hideTooltip();
    }

    private showTooltip(): void {
        const options = new TooltipOptions({
            placement: this.placement,
            content: this.content,
            appendToBody: this.appendToBody,
            hostEl: this.viewContainerRef.element,
        });

        this.visible = true;

        if (this.appendToBody) {
            this.tooltip = this.componentService.appendNextToRoot(TooltipComponent, TooltipOptions, options);
        } else {
            const binding = ReflectiveInjector.resolve([
                {
                    provide: TooltipOptions,
                    useValue: options,
                },
            ]);
            this.tooltip = this.componentService.appendNextToLocation(TooltipComponent, this.viewContainerRef, binding);
        }

        this.changeDetectorRef.markForCheck();
        this.triggerStateChanged();
    }

    private hideTooltip(): void {
        this.visible = false;
        this.tooltip.destroy();
        this.triggerStateChanged();
    }

    private triggerStateChanged(): void {
        this.tooltipStateChanged.emit(this.visible);
    }
}
