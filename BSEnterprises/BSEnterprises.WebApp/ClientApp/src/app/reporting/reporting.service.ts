import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportingService {

  baseUrl : string = "api/Reporting";
constructor(private http : HttpClient) { }

getReports(engineerId : number,fromDate : Date,toDate:Date,sparePartId:number){
  return this.http.get(`${this.baseUrl}?engineerId=${engineerId}&fromDate=${fromDate.toDateString()}
                                        &toDate=${toDate.toDateString()}&sparePartId=${sparePartId}`);
}
getInventories(sparePartId:number){
  return this.http.get(`${this.baseUrl}/Inventory?sparePartId=${sparePartId}`);
}
}
