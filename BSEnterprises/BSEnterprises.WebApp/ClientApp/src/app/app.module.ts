import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { MasterModule } from './master/master.module';
import { AuthenticatedUserComponent } from './shared/components/authenticated-user/authenticated-user.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CompanyService } from './master/components/company/company.service';
import { ProductService } from './master/components/product/product.service';
import { SparePartService } from './master/components/spare-part/spare-part.service';
import { EngineerService } from './master/components/engineer/engineer.service';
import { OrderModule } from './order/order.module';
import { ReportingModule } from './reporting/reporting.module';



@NgModule({
  declarations: [
    AppComponent,
    


  ],
  imports: [
    BrowserModule,
    SharedModule,
    MasterModule,
    OrderModule,
    ReportingModule,
    HttpClientModule,
    RouterModule.forRoot([
      // {path : 'company', component : CompanyListComponent},
      // {path : 'company/id:', component : CompanyFormComponent},
      

      
    
    ])

  ],
  providers: [CompanyService, ProductService, SparePartService,EngineerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
