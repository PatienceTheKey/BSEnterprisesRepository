import { Component, OnInit } from '@angular/core';
import { ISparePart } from '../ispare-part';
import { Message, ConfirmationService, LazyLoadEvent } from 'primeng/components/common/api';

import { Router } from '@angular/router';
import { SparePartService } from '../spare-part.service';

@Component({
  selector: 'app-spare-part-list',
  templateUrl: './spare-part-list.component.html',
  styleUrls: ['./spare-part-list.component.css']
})
export class SparePartListComponent implements OnInit {

  sparePartList: ISparePart[];
 id:number=null;
 selectedSparePart: ISparePart;
 displayDialogDelete : boolean;
 cols : any[];
 msgs: Message[] = [];
 loading : boolean;
 datasource : ISparePart[];
 totalRecords;
 
  constructor(private sparePartService: SparePartService, 
              private router: Router,
              private confirmationService:ConfirmationService) { }

  ngOnInit() {
    this.getSpareParts();
  
    this.cols = [
     { field: 'id', header: 'Sn.', width: '5%' },
     { field: 'name', header: 'Name', width: '15%' },
     
     ];
    
     this.loading = true;
  }
  getSpareParts(){
    this.sparePartService.getAll().subscribe(sparePart=>{
      this.sparePartList = sparePart;
      this.datasource = this.sparePartList;
      this.totalRecords = this.datasource.length;
    });
  }
   
   sparePartToCreate(){
     this.id=0;
     console.log(this.id);
     
   }

   sparePartToEdit(event){
     this.id = event.data.id;
     console.log(this.id);
     

   }

   showDialogToDelete(Rowdata){
    this.selectedSparePart = Rowdata;
    console.log(Rowdata);
    this.displayDialogDelete = true;
    
    this.confirmationService.confirm({
      message : 'Do you want to delete this record?',
      header: 'Delete Confirmation',
          icon: 'fa fa fa-fw fa-trash', 
          accept: () => {
            this.sparePartService.delete(this.selectedSparePart.id).subscribe(() =>{
              this.getSpareParts();
            this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
          });         
          },
        reject: () => {
            // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
        }
     
    });
  } 

   findselectedSparePart():number{
     return this.sparePartList.indexOf(this.selectedSparePart)
   }

   loadingSparePartsLazy(event: LazyLoadEvent) {
    this.loading = true;

    //in a real application, make a remote request to load data using state metadata from event
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    //imitate db connection over a network
    setTimeout(() => {
        if (this.datasource) {
            this.sparePartList = this.datasource.slice(event.first, (event.first + event.rows));
            this.loading = false;
        }
    }, 1000);
}
}