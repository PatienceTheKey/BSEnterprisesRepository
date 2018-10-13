import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AuthenticatedUserComponent } from './components/authenticated-user/authenticated-user.component';
import { BrowserModule } from '@angular/platform-browser';
import { PrimeNgModule } from './primeng/primeng.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    imports: [
        BrowserModule,
        AngularMaterialModule,
        PrimeNgModule,
        FormsModule,
    ReactiveFormsModule,

    ],
    exports: [
        AngularMaterialModule,
        PrimeNgModule,
        FormsModule,
    ReactiveFormsModule,

        
            ],
    declarations: [
       AuthenticatedUserComponent,
       SidebarComponent
        
    ],
    providers: [],
})
export class SharedModule { }
