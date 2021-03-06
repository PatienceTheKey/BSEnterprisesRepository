import { Injectable } from '@angular/core';
import { ServiceBase } from '../../../shared/service-base';
import { ISparePart } from './ispare-part';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOrderItems } from 'src/app/order/iorder';


@Injectable({
  providedIn: 'root'
})


export class SparePartService extends ServiceBase<ISparePart>{
  
  spareParts : ISparePart[];
  
  constructor(private http : HttpClient) {
    super(http,'api/SpareParts')
   }
  
   intializeObject(): ISparePart {
    return{
      id : 0,
      name : '',
      productId: 0,
      hsnSac: '',
      stockInHand : 0,
      openingDate : new Date(),
      model : '',
      code : ''

    }
  }
  
  getSparePartsByProduct(productId : number):Observable<ISparePart[]>{
    return this.http.get<ISparePart[]>(`${this.baseUrl}/Product?productId=${productId}`);
  }
  }
  