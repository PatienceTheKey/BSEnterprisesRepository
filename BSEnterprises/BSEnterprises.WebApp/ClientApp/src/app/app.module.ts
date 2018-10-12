import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
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
import { BillingSparePartService } from './billing/billing-spare-part.service';
import { BillingModule } from './billing/billing.module';
import { CompanyListComponent } from './master/components/company/company-list/company-list.component';


const routes: Routes = [
  {
      path: 'home',
      component: AuthenticatedUserComponent,
      children: [
          { path: 'company', component: CompanyListComponent },
          { path: '', redirectTo: 'company', pathMatch: 'full' },
          

      ]
  }
]


@NgModule({
  declarations: [
    AppComponent,
    


  ],
  imports: [
    BrowserModule,
    SharedModule,
    MasterModule,
    BillingModule,
    OrderModule,
    ReportingModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes
      )

  ],
  providers: [CompanyService, ProductService, SparePartService,EngineerService, BillingSparePartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
