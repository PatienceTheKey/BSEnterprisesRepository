import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../iproduct';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Message, SelectItem } from 'primeng/components/common/api';

import { Router, ActivatedRoute } from '@angular/router';
import { ICompany } from '../../company/icompany';
import { CompanyService } from '../../company/company.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  companies: ICompany[];
  companySelectList: SelectItem[];


  private _id: number;
  get id(): number{
    return this._id;
  }

 @Input()
  set id(value: number){
      this._id = value;

      if(this._id !=null){
        console.log(this._id)
        this.getProduct(this._id);
        
      }
  }

  @Output() closeDialog:EventEmitter<any> = new EventEmitter<any>();
  @Output() refreshList:EventEmitter<boolean> = new EventEmitter<boolean>();
 
  pageTitle;
  product:IProduct;
  productForm: FormGroup;
  
  msgs:Message[] = [];
  cols : any[];
  displayDialog : boolean;
  
  busy : boolean;

  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private companyService: CompanyService,
              private router: Router,
              private route: ActivatedRoute,
              ) { }

  ngOnInit() {

    this.companyService.getAll().subscribe(companies => {
      this.companies = companies
      this.companySelectList = this.companies.map(cl => (
          {
              label: cl.name,
              value: cl.id
          }));
  });


    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.productForm = this.newForm();
    
   
  }

  
  newForm():FormGroup{
    return this.fb.group({
      name: ['', ],
      price: ['', ],
      companyId: ['', ],
       
       });
}

private getProduct(this_id):void{
  this.productService.getOne(this.id)
  .subscribe((product:IProduct)=> this.onProductRetrieved(product)
  );
}

 
private onProductRetrieved(product:IProduct): void{
  this.displayDialog = true;
  this.product = product;

   if(this.id == 0){
     this.productForm = this.newForm();
     this.pageTitle = 'Add Product';
     console.log("add")
   }
   else
   {
    this.pageTitle = `Edit Product: ${this.product.name}`;
        this.productForm.patchValue({
        name: this.product.name,
        price: this.product.price,
        companyId: this.product.companyId,
    
    
});

  }


}

saveProduct(): void {

  if (this.productForm.dirty && this.productForm.valid) {

      let productToSave = Object.assign({}, this.product, this.productForm.value);
      this.busy = true;
      this.productService.save(productToSave, this.id).subscribe(()=> this.onSaveComplete());
           }


  else if (!this.productForm.dirty) {
      this.onSaveComplete();
  }
}

private onSaveComplete():void{
  const displayMsg = this.id == 0 ? 'Saved' : 'Updated';
  this.msgs = [];
  this.msgs.push({
    severity : 'success',
    summary : 'Success Message',
    detail : 'Product Sucessfully' + displayMsg
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

