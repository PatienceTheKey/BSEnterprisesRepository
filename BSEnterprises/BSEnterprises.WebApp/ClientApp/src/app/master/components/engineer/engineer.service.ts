import { Injectable } from '@angular/core';
import { ServiceBase } from '../../../shared/service-base';

import { HttpClient } from '@angular/common/http';
import { IEngineer } from './iengineer';


@Injectable({
  providedIn: 'root'
})

export class EngineerService extends ServiceBase<IEngineer>{
  
  engineers : IEngineer[];
  
  constructor(private http : HttpClient) {
    super(http,'api/Engineers')
   }
  
   intializeObject(): IEngineer {
    return{
      id : 0,
      name : '',
      contactNumber:'',
      address:''
    }
  }
  
  }
  