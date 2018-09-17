import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EngineerService } from '../engineer.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Message } from 'primeng/components/common/api';
import { IEngineer } from '../iengineer';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-engineer-form',
  templateUrl: './engineer-form.component.html',
  styleUrls: ['./engineer-form.component.css']
})
export class EngineerFormComponent implements OnInit {

  private _id: number;
  get id(): number{
    return this._id;
  }

 @Input()
  set id(value: number){
      this._id = value;

      if(this._id !=null){
        console.log(this._id)
        this.getEngineer(this._id);
        
      }
  }

  @Output() closeDialog:EventEmitter<any> = new EventEmitter<any>();
  @Output() refreshList:EventEmitter<boolean> = new EventEmitter<boolean>();
 
  pageTitle;
  engineer:IEngineer;
  engineerForm: FormGroup;
  msgs:Message[] = [];
  cols : any[];
  displayDialog : boolean = false;
  
  busy : boolean;

  constructor(private fb: FormBuilder,
              private engineerService: EngineerService,
              private router: Router,
              private route: ActivatedRoute,
              ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.engineerForm = this.newForm();
     }

  
  newForm():FormGroup{
    return this.fb.group({
      name: ['', ],
      address: ['', ],
      contactNumber: ['', ],
           //  openBalance: [0,Validators.required],
  });
}

private getEngineer(this_id):void{
  this.engineerService.getOne(this.id)
  .subscribe((engineer:IEngineer)=> this.onEngineerRetrieved(engineer)
  );
}

 
private onEngineerRetrieved(engineer:IEngineer): void{
  this.displayDialog = true;
  this.engineer = engineer;

   if(this.id == 0){
     this.engineerForm = this.newForm();
     this.pageTitle = 'Add Engineer';
     console.log("add")
   }
   else
   {
    this.pageTitle = `Edit Engineer: ${this.engineer.name}`;
    //  let opDate = new Date(this.customer.customerOpeningDate);
    // Update the data on the form
    this.engineerForm.patchValue({
        name: this.engineer.name,
        address: this.engineer.address,
        contactNumber: this.engineer.contactNumber,
       
       
    
});

  }


}

saveEngineer(): void {

  if (this.engineerForm.dirty && this.engineerForm.valid) {

      let engineerToSave = Object.assign({}, this.engineer, this.engineerForm.value);
      this.busy = true;
      this.engineerService.save(engineerToSave, this.id).subscribe(()=> this.onSaveComplete());
           }


  else if (!this.engineerForm.dirty) {
      this.onSaveComplete();
  }
}

private onSaveComplete():void{
  const displayMsg = this.id == 0 ? 'Saved' : 'Updated';
  this.msgs = [];
  this.msgs.push({
    severity : 'success',
    summary : 'Success Message',
    detail : 'Engineer Sucessfully' + displayMsg
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
