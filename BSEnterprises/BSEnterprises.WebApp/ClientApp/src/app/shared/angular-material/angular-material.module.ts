import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';


@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatTableModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatTableModule
    ],
    declarations: [],
    providers: [],
})
export class AngularMaterialModule { }
