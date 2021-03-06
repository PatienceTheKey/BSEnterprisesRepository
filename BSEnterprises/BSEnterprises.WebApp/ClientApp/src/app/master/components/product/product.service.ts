import { Injectable } from '@angular/core';

import { ServiceBase } from '../../../shared/service-base';
import { HttpClient } from '@angular/common/http';
import { IProduct } from 'src/app/master/components/product/iproduct';
import { Observable } from 'rxjs';

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
      price : 0

    }
  }

  getProductsByCompany(companyId : number):Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${this.baseUrl}/Company?companyId=${companyId}`);
  }
  
  }
  