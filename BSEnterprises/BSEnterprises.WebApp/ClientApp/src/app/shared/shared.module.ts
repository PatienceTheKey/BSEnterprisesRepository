import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AuthenticatedUserComponent } from './components/authenticated-user/authenticated-user.component';
import { BrowserModule } from '@angular/platform-browser';
import { PrimeNgModule } from './primeng/primeng.module';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
    imports: [
        BrowserModule,
        AngularMaterialModule,
        PrimeNgModule
    ],
    exports: [
        AngularMaterialModule,
        PrimeNgModule
        
            ],
    declarations: [
       AuthenticatedUserComponent,
       SidebarComponent
        
    ],
    providers: [],
})
export class SharedModule { }
