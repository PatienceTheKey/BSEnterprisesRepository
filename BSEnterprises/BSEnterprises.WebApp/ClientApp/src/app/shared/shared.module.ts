import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AuthenticatedUserComponent } from './components/authenticated-user/authenticated-user.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
    imports: [
        BrowserModule,
        AngularMaterialModule
    ],
    exports: [
        AngularMaterialModule,
            ],
    declarations: [
       AuthenticatedUserComponent
        
    ],
    providers: [],
})
export class SharedModule { }
