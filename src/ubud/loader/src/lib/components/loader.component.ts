import { Component, Input } from '@angular/core';

@Component({
    selector: 'ubud-loader-component',
    template: `
        <span class="la-loader" [ngClass]="['la-' + size, 'la-' + type]">
            <ng-container *ngIf="'ball-fall' === type">
                <span></span>
                <span></span>
                <span></span>
            </ng-container>
            <ng-container *ngIf="'ball-clip-rotate' === type">
                <span></span>
            </ng-container>
        </span>
    `,
    styleUrls: ['../styles/ball-fall-loader.scss', '../styles/clip-rotate-loader.scss'],
})
export class LoaderComponent {
    @Input() public size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

    @Input() public type: 'ball-fall' | 'ball-clip-rotate' = 'ball-fall';
}
