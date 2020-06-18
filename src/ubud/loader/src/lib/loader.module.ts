import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoaderComponent } from './components/loader.component';

@NgModule({
    imports: [CommonModule],
    declarations: [LoaderComponent],
    exports: [LoaderComponent],
})
export class UbudLoaderModule {}
