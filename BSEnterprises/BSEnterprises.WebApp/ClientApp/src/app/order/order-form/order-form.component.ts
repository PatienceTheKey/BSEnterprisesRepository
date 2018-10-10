import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { OrderService } from '../order.service';
import { Iorder, IOrderItems } from '../iorder';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { IProduct } from '../../master/components/product/iproduct';
import { ISparePart } from '../../master/components/spare-part/ispare-part';
import { ProductService } from '../../master/components/product/product.service';
import { SparePartService } from '../../master/components/spare-part/spare-part.service';
import { EngineerService } from '../../master/components/engineer/engineer.service';
import { IEngineer } from '../../master/components/engineer/iengineer';
import { SelectItem } from 'primeng/api';

import { EventListener } from '@angular/core/src/debug/debug_node';
import { ICompany } from 'src/app/master/components/company/icompany';
import { CompanyService } from 'src/app/master/components/company/company.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  id : number;
  order : Iorder;
  pageTitle;
  products: IProduct[];
  spareParts: ISparePart[];
  product;
  sparePart;
  orderForm : FormGroup;
  engineers : IEngineer[];
  engineerSelectList : SelectItem[];
  productSelectList : SelectItem[];
  sparePartSelectList : SelectItem[];
  selectedOrderItem : IOrderItems[];
  editForm : FormGroup;
  returnGood;
  returnDefective;
  displayDialog: boolean;
  orderItem : IOrderItems;
  index: any;
  company : ICompany[];
  companySelectList : SelectItem[];


  cId:any;


  constructor(private orderService : OrderService,
              private route : ActivatedRoute,
              private fb : FormBuilder,
              private productService: ProductService,
              private engineerService: EngineerService,
              private sparePartService: SparePartService,
              private companyService : CompanyService,
              private router : Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getOrder(this.id);
  });


  this.engineerService.getAll().subscribe(res => {
    this.engineers = res;
    this.engineerSelectList = this.engineers.map(el => ({
      label : el.name,
      value : el.id,
    }))
  })


  this.companyService.getAll().subscribe(res => {
    this.company = res;
    this.companySelectList = this.company.map(el => ({
      label : el.name,
      value : el.id,
    }))
  })



  this.productService.getAll().subscribe(res => {
    this.product = res;
   
  })
 
  this.sparePartService.getAll().subscribe(res => {
    this.sparePart = res;
   
  })

  // this.sparePartService.getAll().subscribe(res => {
  //   this.spareParts = res;
  //   this.sparePartSelectList = this.spareParts.map(el => ({
  //     label : el.name,
  //     value : el.id,
  //   }))
  // })

  

  this.orderForm = this.fb.group({
    engineerId :[],
    orderDate : new Date(),
    orderItems : this.fb.array([])
  })

  this.editForm = this.fb.group({
    returnDefective : [0],
  
  })
}

getProducts(cId:any){
  this.productService.getProductsByCompany(cId).subscribe(res => {
    this.products = res;
    this.productSelectList = this.products.map(el => ({
      label : el.name,
      value : el.id,
    }))
  })
}
getSpareParts(pId : any){
  this.sparePartService.getSparePartsByProduct(pId).subscribe(res => {
    this.spareParts = res;
    this.sparePartSelectList = this.spareParts.map(el => ({
      label : el.name,
      value : el.id,
    }))
  })
}



  getOrder(id){
     this.orderService.getOne(id).subscribe((order:Iorder) => this.orderRetreived(order))
  }


  private orderRetreived(order: Iorder): void {

    if (this.orderForm) {
      this.orderForm.reset();
    }

    this.order = order;

    if (this.order.id == 0) {
      this.pageTitle = 'Add Price List';
    }

    else {
      this.pageTitle = `Edit Price List: `;
      let patchDate = new Date(this.order.orderDate); 

      // Update the data on the form
      this.orderForm.patchValue({

        id: this.order.id,
        engineerId: this.order.engineerId,
        orderDate : new Date(patchDate.getTime() + Math.abs(patchDate.getTimezoneOffset() * 60000))
      });
      for (var i = 0; i < this.order.orderItems.length; i++) {
        this.orderItems.push(this.buildOrderItem(this.order.orderItems[i]));
      }

    }
  }

    get orderItems(): FormArray {
      return <FormArray>this.orderForm.get('orderItems');
    }

    addOrderItems(pId: any, quantity: HTMLInputElement, sparePartItem: any, rD : any,cId : any): void {

  let product = this.products.find(p => p.id == Number(pId.value));

  let orderItem: IOrderItems = {
    id : Number(),
    productId: Number(pId.value),
    sparePartId: Number(sparePartItem.value),
    quantity: Number(quantity.value),
    returnDefective : Number(rD.value),
    companyId : Number(cId.value),
    leftInBag :Number(quantity.value) - Number(rD.value),
  };


  
    

    this.orderItems.push(this.buildOrderItem(orderItem));

    quantity.value = null;
    pId.value = null;
    sparePartItem.value = null;
    pId.focus();
    return;
  
}







removeItem(i : number){
  this.orderItems.removeAt(i);
}

insertItem(i:number){
  
   this.orderItems.at(i).patchValue({
   returnDefective : this.editForm.get('returnDefective').value,

    });

 
}


private buildOrderItem(orderItem: IOrderItems): FormGroup {
  return this.fb.group({
    productId: [orderItem.productId, [Validators.required]],
    quantity: [orderItem.quantity, [Validators.required]],
    sparePartId: [orderItem.sparePartId, [Validators.required]],
    companyId: [orderItem.companyId, [Validators.required]],
    returnDefective: [orderItem.returnDefective, [Validators.required]],
    leftInBag : [orderItem.leftInBag,[Validators.required]]
  });

}

getProductName(id: number): string {
  if (this.product) {
    return this.product.find(p => p.id == id).name;
  }
}

getCompanyName(id: number): string {
  if (this.company) {
    return this.company.find(p => p.id == id).name;
  }
}


getSparePartName(id: number): string {
  if (this.sparePart) {
    return this.sparePart.find(p => p.id == id).name;
  }
}





saveOrder(): void {


  let p = Object.assign({}, this.order, this.orderForm.value);

  this.orderService.save(p, this.id)
    .subscribe(() => this.onSaveComplete());

}

private onSaveComplete(): void {

  let displayMsg = this.id == 0 ? "Saved" : "Updated";


  this.router.navigate(['../'], { relativeTo: this.route });
}

editItems(event){
  // this.index = event.data.productId;
  // console.log(this.index);
  
  this.returnDefective = event.data.returnDefective;
  
  this.index = event.index;
  console.log(this.index);
  this.displayDialog = true;
   this.editForm.patchValue({
    returnDefective : this.returnDefective,

    addOrderItems(pId: any, quantity: HTMLInputElement, sparePartItem: any, rD : any,cId : any): void {

      let product = this.products.find(p => p.id == Number(pId.value));
    
      let orderItem: IOrderItems = {
        id : Number(),
        productId: Number(pId.value),
        sparePartId: Number(sparePartItem.value),
        quantity: Number(quantity.value),
        returnDefective : Number(rD.value),
        companyId : Number(cId.value),
        leftInBag :Number(quantity.value) - Number(rD.value),
      };
    
    
      
        
    
        this.orderItems.push(this.buildOrderItem(orderItem));
    
        quantity.value = null;
        pId.value = null;
        sparePartItem.value = null;
        pId.focus();
        return;
      
    }
    
    

   
  })

  
  

}

saveItem(){
  this.insertItem(this.index);
  
  this.displayDialog = false;

  
  
}









  }
















