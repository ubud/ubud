/*
 * This file is part of the Ubud Skeleton package.
 *
 * (c) 2018 Ubud <https://github.com/ubud>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { DropdownToggleDirective } from '@ubud/dropdown/directives/dropdown-toggle.directive';

/**
 * @author  Iqbal Maulana <iq.bluejack@gmail.com>
 */
@Component({
    selector: 'ubud-dropdown',
    template: `
        <div class="dropdown">
            <ng-content select="[ubudDropdownToggle]"></ng-content>
            <ng-content *ngIf="show"></ng-content>
        </div>
    `,
    styleUrls: ['../styles/dropdown.scss'],
})
export class DropdownComponent implements AfterContentInit {
    @ContentChild(DropdownToggleDirective, <any> { descendants: false })
    public toggle: DropdownToggleDirective;

    @Output()
    public showChange: EventEmitter<boolean> = new EventEmitter();

    @Input()
    public get show(): boolean {
        return this.showValue;
    }

    public set show(show: boolean) {
        this.showValue = show;
        this.showChange.emit(this.showValue);
    }

    private showValue: boolean = false;

    public constructor(private el: ElementRef) {
    }

    public ngAfterContentInit(): void {
        this.toggle.toggled.subscribe(() => this.show = !this.show);
    }

    @HostListener('document:click', ['$event'])
    public onDocumentClick(e: any): void {
        if (!this.el.nativeElement.contains(e.target) || e.target.nodeName.toLowerCase() === 'a') {
            this.show = false;
        }
    }

}
