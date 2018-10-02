import { Injectable } from '@angular/core';
import { ServiceBase } from '../shared/service-base';
import { Iorder } from './iorder';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class OrderService extends ServiceBase<Iorder> {
  
    orders : Iorder[];
    
    constructor(private http : HttpClient) {
      super(http,'api/Order')
     }
    
     intializeObject(): Iorder {
     return{
       id : 0,
       orderdate: new Date(),
       engineerId: 0,
       orderItems: [],     }   
    }
    
    getOrdersByDate(fromDate: Date, toDate:Date){

      return this.http.get(`${this.baseUrl}?fromDate=${fromDate.toDateString()}&toDate=${toDate.toDateString()}`);

    }

    }
    