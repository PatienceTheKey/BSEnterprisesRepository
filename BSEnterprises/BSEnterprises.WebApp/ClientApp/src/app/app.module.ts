import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { MasterModule } from './master/master.module';
import { AuthenticatedUserComponent } from './shared/components/authenticated-user/authenticated-user.component';
import { CompanyListComponent } from './master/components/company-list/company-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MasterModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : 'company', component : CompanyListComponent
        
    }
      
    
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
