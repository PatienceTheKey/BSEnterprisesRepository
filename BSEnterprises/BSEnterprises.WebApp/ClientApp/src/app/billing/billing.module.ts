import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingSparePartComponent } from './billing-spare-part/billing-spare-part.component';
import { BillingSparePartListComponent } from './billing-spare-part-list/billing-spare-part-list.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedUserComponent } from '../shared/components/authenticated-user/authenticated-user.component';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  {
      path: 'billing',
      component: AuthenticatedUserComponent,
      children: [
          
          { path: "billing-spare-part/:id", component: BillingSparePartComponent },
          { path: "billing-spare-part", component: BillingSparePartListComponent },
          { path: '', redirectTo: 'billing-spare-part', pathMatch: 'full' },
          
      ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    
    RouterModule.forChild(routes)

  ],
  declarations: [BillingSparePartComponent, BillingSparePartListComponent]
})
export class BillingModule { }
