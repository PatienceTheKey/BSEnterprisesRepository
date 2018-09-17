import { Component, OnInit } from '@angular/core';
import { EngineerService } from '../engineer.service';
import { ConfirmationService, Message, LazyLoadEvent } from 'primeng/api';
import { Router } from '@angular/router';
import { IEngineer } from '../iengineer';

@Component({
  selector: 'app-engineer-list',
  templateUrl: './engineer-list.component.html',
  styleUrls: ['./engineer-list.component.css']
})
export class EngineerListComponent implements OnInit {

  engineerList: IEngineer[];
 id:number=null;
 selectedEngineer: IEngineer;
 displayDialogDelete : boolean;
 cols : any[];
 msgs: Message[] = [];
 loading : boolean;
 datasource : IEngineer[];
 totalRecords : number;
 
  constructor(private engineerService: EngineerService, 
              private router: Router,
              private confirmationService:ConfirmationService) { }

  ngOnInit() {
    this.getEngineers();
    
    this.cols = [
     { field: 'id', header: 'Sn.', width: '5%' },
     { field: 'name', header: 'Name', width: '15%' },
     { field: 'contactNumber', header: 'Contact Number', width: '15%' },
     { field: 'address', header: 'Address ', width: '15%' },
     ];
    
     this.loading = true;
  }
  getEngineers(){
    this.engineerService.getAll().subscribe(engineer=>{
      this.engineerList = engineer;
      this.datasource = this.engineerList;
      this.totalRecords = this.datasource.length;
    });
  }
   
   engineerToCreate(){
     this.id=0;
     console.log(this.id);
     
   }

   engineerToEdit(event){
     this.id = event.data.id;
     console.log(this.id);
     

   }

   showDialogToDelete(Rowdata){
    this.selectedEngineer = Rowdata;
    console.log(Rowdata);
    this.displayDialogDelete = true;
    
    this.confirmationService.confirm({
      message : 'Do you want to delete this record?',
      header: 'Delete Confirmation',
          icon: 'fa fa fa-fw fa-trash', 
          accept: () => {
            this.engineerService.delete(this.selectedEngineer.id).subscribe(() =>{
              this.getEngineers();
            this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
          });         
          },
        reject: () => {
            // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
        }
     
    });
  } 

   findselectedEngineerIndex():number{
     return this.engineerList.indexOf(this.selectedEngineer)
   }

   loadEngineersLazy(event: LazyLoadEvent) {
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
            this.engineerList = this.datasource.slice(event.first, (event.first + event.rows));
            this.loading = false;
        }
    }, 1000);
}
}
