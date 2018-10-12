import { Injectable } from '@angular/core';
import { ServiceBase } from '../shared/service-base';
import { IBillingSpareItems, IBillingSparePart } from './ibilling-spare-part';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BillingSparePartService extends ServiceBase<IBillingSparePart> {



  billingSpareParts: IBillingSparePart[];

  constructor(private http: HttpClient) {
    super(http, 'api/BillingSparePart')
  }

  intializeObject(): IBillingSparePart {
    return {
      id: 0,
      date: new Date(),
      customerName: "",
      customerAddress: "",
      customerGstin: "",
      customerContact: 0,
      placeOfSupply: "",
      totalInvoiceValue: 0,
      billingSpareItems: [],
    }
  }

  getOrdersByDate(fromDate: Date, toDate: Date) {

    return this.http.get(`${this.baseUrl}?fromDate=${fromDate.toDateString()}&toDate=${toDate.toDateString()}`);

  }

}
