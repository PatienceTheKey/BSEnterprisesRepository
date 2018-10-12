import { Component, OnInit } from '@angular/core';
import { ReportingService } from '../reporting.service';
import { SparePartService } from 'src/app/master/components/spare-part/spare-part.service';
import { ISparePart } from 'src/app/master/components/spare-part/ispare-part';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-spare-part-wise-reporting',
  templateUrl: './spare-part-wise-reporting.component.html',
  styleUrls: ['./spare-part-wise-reporting.component.css']
})
export class SparePartWiseReportingComponent implements OnInit {

  sparePartId : number;
  inventory;
  spareParts : ISparePart[];
  sparePartSelectList : SelectItem[];
  
  constructor(private reportingService : ReportingService,
              private sparePartService : SparePartService) { }

  ngOnInit() {
    this.sparePartService.getAll().subscribe(res => {
      this.spareParts = res;
      this.sparePartSelectList = this.spareParts.map(el => ({
        label : el.name,
        value : el.id,
      }))
    })
  }

  getInventory(){
    this.reportingService.getInventories(this.sparePartId).subscribe(res => this.inventory = res);
  }
}
