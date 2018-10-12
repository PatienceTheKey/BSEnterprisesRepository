import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { BillingSparePartService } from '../billing-spare-part.service';
import { ConfirmationService, Message } from 'primeng/api';

@Component({
  selector: 'app-billing-spare-part-list',
  templateUrl: './billing-spare-part-list.component.html',
  styleUrls: ['./billing-spare-part-list.component.css']
})
export class BillingSparePartListComponent implements OnInit {

  id: number;
  toDate: Date;
  fromDate: Date;
  orders;
  selectedOrder;
  displayDialog: boolean;
  msgs: Message[] = [];

  constructor(private _router: Router, private billingSparePartService: BillingSparePartService, 
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.toDate = new Date();
    this.fromDate = new Date();
    this.searchByDate(this.fromDate, this.toDate);
  }

  // getCompanyLogList() {
  //   this.orderService.getAll().subscribe(companyLogList => {
  //     this.companylogs = companyLogList;
  //   });
  // }

  add() {
    this.id = 0;
    this._router.navigate(['billing/billing-spare-part', this.id])
  }
  edit(event) {
    this.id = event.data.id;
    console.log(this.id)
    this._router.navigate(['billing/billing-spare-part', this.id])
  }
  searchByDate(fromDate: Date, toDate: Date) {
    this.billingSparePartService.getOrdersByDate(this.fromDate, this.toDate).subscribe(response => {
      this.orders = response;
    });
  }

  /* deleteFromList(id:number){
     this.files = this.files.splice(index, 1);
 
   }*/

  showDialogToDelete(Rowdata) {
    this.selectedOrder = Rowdata;
    console.log(Rowdata);
    this.displayDialog = true;

    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'fa fa fa-fw fa-trash',
      accept: () => {
        this.billingSparePartService.delete(this.selectedOrder.id).subscribe(() => {
          this.searchByDate(this.fromDate, this.toDate);
          this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' }];
        });
      },
      reject: () => {
        // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }

    });
  }
}

