import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderListComponent } from './order-list/order-list.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedUserComponent } from '../shared/components/authenticated-user/authenticated-user.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
      path: 'order',
      component: AuthenticatedUserComponent,
      children: [
          {path : 'orders' , component : OrderListComponent},
          {path : 'orders/:id', component : OrderFormComponent},
          { path: '', redirectTo: 'orders', pathMatch: 'full' },

      ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrderFormComponent, OrderListComponent]
})
export class OrderModule { }
