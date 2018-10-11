import { Component, OnInit } from '@angular/core';
import { ReportingService } from '../reporting.service';
import { EngineerService } from 'src/app/master/components/engineer/engineer.service';
import { IEngineer } from 'src/app/master/components/engineer/iengineer';
import { SelectItem } from 'primeng/api';
import { SparePartService } from 'src/app/master/components/spare-part/spare-part.service';
import { ISparePart } from 'src/app/master/components/spare-part/ispare-part';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {

  engineerId:number;
  fromDate:Date;
  toDate:Date;
  sparePartId : number;
  reporting;
  engineers : IEngineer[];
  engineerSelectList: SelectItem[];
  spareParts : ISparePart[];
  sparePartSelectList : SelectItem[];
  

  constructor(private reportingService : ReportingService,
              private engineerService : EngineerService,
              private sparePartService : SparePartService) { }

  ngOnInit() {
    this.engineerService.getAll().subscribe(res => {
      this.engineers = res;
      this.engineerSelectList = this.engineers.map(el => ({
        label : el.name,
        value : el.id,
      }))
    })

    this.sparePartService.getAll().subscribe(res => {
      this.spareParts = res;
      this.sparePartSelectList = this.spareParts.map(el => ({
        label : el.name,
        value : el.id,
      }))
    })
  }

  getReports(){
    this.reportingService.getReports(this.engineerId,this.fromDate,this.toDate,this.sparePartId)
                                    .subscribe(res => this.reporting = res);
  }
}
