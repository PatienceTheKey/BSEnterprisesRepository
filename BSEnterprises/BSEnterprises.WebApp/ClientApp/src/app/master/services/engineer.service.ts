import { Injectable } from '@angular/core';
import { ServiceBase } from '../../shared/service-base';
import { IEngineer } from '../interface/engineer';
import { HttpClient } from '@angular/common/http';


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
    name : ''
  }
}

}
