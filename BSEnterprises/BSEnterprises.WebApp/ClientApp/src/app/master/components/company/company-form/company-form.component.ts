import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICompany } from '../icompany';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Message, SelectItem } from 'primeng/components/common/api';
import { CompanyService } from '../company.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {

  
  private _id: number;
  get id(): number{
    return this._id;
  }

 @Input()
  set id(value: number){
      this._id = value;

      if(this._id !=null){
        console.log(this._id)
        this.getCompany(this._id);
        
      }
  }

  @Output() closeDialog:EventEmitter<any> = new EventEmitter<any>();
  @Output() refreshList:EventEmitter<boolean> = new EventEmitter<boolean>();
 
  pageTitle;
  company:ICompany;
  companyForm: FormGroup;
  
  msgs:Message[] = [];
  cols : any[];
  displayDialog : boolean = true;
  registrationType : SelectItem[];
  busy : boolean;

  constructor(private fb: FormBuilder,
              private companyService: CompanyService,
              private router: Router,
              private route: ActivatedRoute,
              ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.companyForm = this.newForm();
    
   
  }

  
  newForm():FormGroup{
    return this.fb.group({
      id:0,
      name: ['', ],
       contactNumber: ['', ],
       });
}

private getCompany(this_id):void{
  this.companyService.getOne(this.id)
  .subscribe((company:ICompany)=> this.onCompanyRetrieved(company)
  );
}

 
private onCompanyRetrieved(company:ICompany): void{
  this.displayDialog = true;
  this.company = company;

   if(this.company.id == 0){
     this.companyForm = this.newForm();
     this.pageTitle = 'Add Company';
     console.log("add")
   }
   else
   {
    this.pageTitle = `Edit Company: ${this.company.name}`;
        this.companyForm.patchValue({
        name: this.company.name,
        company: this.company.contactNumber,
    
    
});

  }


}

saveCompany(): void {

  if (this.companyForm.dirty && this.companyForm.valid) {

      let companyToSave = Object.assign({}, this.company, this.companyForm.value);
      this.busy = true;
      this.companyService.save(companyToSave, this.id).subscribe(()=> this.onSaveComplete());
           }


  else if (!this.companyForm.dirty) {
      this.onSaveComplete();
  }
}

private onSaveComplete():void{
  const displayMsg = this.id == 0 ? 'Saved' : 'Updated';
  this.msgs = [];
  this.msgs.push({
    severity : 'success',
    summary : 'Success Message',
    detail : 'Company Sucessfully' + displayMsg
  });
  // this.router.navigate(['/customer']);
  this.refreshList.emit(true);
  this.displayDialog=false;
  this.closeDialog.emit(null);
}

disable(){
  this.busy = false;
}

}





