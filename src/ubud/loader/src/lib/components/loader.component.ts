import { Component, Input } from '@angular/core';

@Component({
    selector: 'ubud-loader-component',
    template: `
        <span class="la-loader" [ngClass]="['la-' + size, 'la-' + type]">
            <span></span>
            <span></span>
            <span></span>
        </span>
    `,
    styleUrls: ['../styles/loader.scss'],
})
export class LoaderComponent {
    @Input() public size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

    @Input() public type: 'ball-fall' = 'ball-fall';
}
