import { Injectable } from '@angular/core';
import { IProduct } from './iproduct';
import { ServiceBase } from '../../../shared/service-base';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends ServiceBase<IProduct>{
  
  products : IProduct[];
  
  constructor(private http : HttpClient) {
    super(http,'api/Products')
   }
  
   intializeObject(): IProduct {
    return{
      id : 0,
      name : '',
      companyId: 0,

    }
  }
  
  }
  