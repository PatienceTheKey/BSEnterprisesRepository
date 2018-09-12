import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { MasterModule } from './master/master.module';
import { AuthenticatedUserComponent } from './shared/components/authenticated-user/authenticated-user.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MasterModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : 'master', component : AuthenticatedUserComponent },
      { path: '', redirectTo: 'master/company', pathMatch: 'full' },
    
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
