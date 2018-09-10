import { Injectable } from '@angular/core';
import { ServiceBase } from '../../shared/service-base';
import { ICompany } from '../interface/company';
import { HttpClient } from '@angular/common/http';

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
   name : ''
 }   
}

}
