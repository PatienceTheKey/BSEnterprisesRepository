import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    imports: [
        BrowserModule,
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
