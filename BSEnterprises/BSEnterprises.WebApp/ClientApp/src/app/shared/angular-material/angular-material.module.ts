import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatSidenavModule,
        MatButtonModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatTableModule,
        MatSidenavModule,
        MatButtonModule
    ],
    declarations: [],
    providers: [],
})
export class AngularMaterialModule { }
