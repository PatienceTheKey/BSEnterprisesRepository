import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { ICompany } from 'src/app/master/components/company/icompany';
import { ServiceBase } from '../../../shared/service-base';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends ServiceBase<ICompany> {
  
companies : ICompany[];

constructor(private http : HttpClient) {
  super(http,'api/Companies')
 }

 intializeObject(): ICompany {
 return{
   id : 0,
   name : '',
   contactNumber: '',
 }   
}

}
