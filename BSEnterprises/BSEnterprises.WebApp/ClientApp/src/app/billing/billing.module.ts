import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingSparePartComponent } from './billing-spare-part/billing-spare-part.component';
import { BillingSparePartListComponent } from './billing-spare-part-list/billing-spare-part-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BillingSparePartComponent, BillingSparePartListComponent]
})
export class BillingModule { }
