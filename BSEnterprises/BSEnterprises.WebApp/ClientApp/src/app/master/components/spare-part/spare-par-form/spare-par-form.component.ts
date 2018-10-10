import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISparePart } from '../ispare-part';
import { FormGroup, FormBuilder } from '@angular/forms';

import { SparePartService } from '../spare-part.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Message, SelectItem } from 'primeng/components/common/api';
import { ProductService } from '../../product/product.service';
import { IProduct } from '../../product/iproduct';

@Component({
  selector: 'app-spare-par-form',
  templateUrl: './spare-par-form.component.html',
  styleUrls: ['./spare-par-form.component.css']
})
export class SpareParFormComponent implements OnInit {

  products: IProduct[];
  productSelectList: SelectItem[];


  private _id: number;
  get id(): number{
    return this._id;
  }

 @Input()
  set id(value: number){
      this._id = value;

      if(this._id !=null){
        console.log(this._id)
        this.getSparePart(this._id);
        
      }
  }

  @Output() closeDialog:EventEmitter<any> = new EventEmitter<any>();
  @Output() refreshList:EventEmitter<boolean> = new EventEmitter<boolean>();
 
  pageTitle;
  sparePart:ISparePart;
  sparePartForm: FormGroup;
  msgs:Message[] = [];
  cols : any[];
  displayDialog : boolean = false;
  
  busy : boolean;

  constructor(private fb: FormBuilder,
              private sparePartService: SparePartService,
              private router: Router,
              private route: ActivatedRoute,
              private productService: ProductService,
              ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.productService.getAll().subscribe(products => {
      this.products = products;
      this.productSelectList = this.products.map(cl => (
        {
          label: cl.name,
          value: cl.id
        }));
    });
    this.sparePartForm = this.newForm();
     }

  
  newForm():FormGroup{
    return this.fb.group({
      name: ['', ],
      price: [0 ],
      hsnSac: [''],
      rateOfTax: [0],
      productId: ['']
                //  openBalance: [0,Validators.required],
  });
}

private getSparePart(this_id):void{
  this.sparePartService.getOne(this.id)
  .subscribe((sparePart:ISparePart)=> this.onSparePartRetrieved(sparePart)
  );
}

 
private onSparePartRetrieved(sparePart:ISparePart): void{
  this.displayDialog = true;
  this.sparePart = sparePart;

   if(this.id == 0){
     this.sparePartForm = this.newForm();
     this.pageTitle = 'Add Spare Part';
     console.log("add")
   }
   else
   {
    this.pageTitle = `Edit Spare Part: ${this.sparePart.name}`;
    //  let opDate = new Date(this.customer.customerOpeningDate);
    // Update the data on the form
    this.sparePartForm.patchValue({
        name: this.sparePart.name,
        price: this.sparePart.price,
        productId: this.sparePart.productId,
        hsnSac: this.sparePart.hsnSac,
        rateOfTax: this.sparePart.rateOfTax,
        
       
    
});

  }


}

saveSparePart(): void {

  if (this.sparePartForm.dirty && this.sparePartForm.valid) {

      let sparePartToSave = Object.assign({}, this.sparePart, this.sparePartForm.value);
      this.busy = true;
      this.sparePartService.save(sparePartToSave, this.id).subscribe(()=> this.onSaveComplete());
           }


  else if (!this.sparePartForm.dirty) {
      this.onSaveComplete();
  }
}

private onSaveComplete():void{
  const displayMsg = this.id == 0 ? 'Saved' : 'Updated';
  this.msgs = [];
  this.msgs.push({
    severity : 'success',
    summary : 'Success Message',
    detail : 'Spare Part Sucessfully' + displayMsg
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
