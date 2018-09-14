import { Injectable } from '@angular/core';
import { ServiceBase } from '../../../shared/service-base';
import { ISparePart } from './ispare-part';
import { HttpClient } from '@angular/common/http';


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

    }
  }
  
  }
  