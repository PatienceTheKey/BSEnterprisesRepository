import { Component, OnInit } from '@angular/core';
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
  orderForm : FormGroup;
  engineers : IEngineer[];
  engineerSelectList : SelectItem[];
  productSelectList : SelectItem[];
  sparePartSelectList : SelectItem[];
  selectedOrderItem : IOrderItems[];
  editForm : FormGroup;
  quantity;
  displayDialog: boolean;
  expandedRows;

  constructor(private orderService : OrderService,
              private route : ActivatedRoute,
              private fb : FormBuilder,
              private productService: ProductService,
              private engineerService: EngineerService,
              private sparePartService: SparePartService,
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

  this.productService.getAll().subscribe(res => {
    this.products = res;
    this.productSelectList = this.products.map(el => ({
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

  this.orderForm = this.fb.group({
    engineerId :[],
    orderDate : new Date(),
    orderItems : this.fb.array([])
  })

  this.editForm = this.fb.group({
    quantity : [0]
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

    addOrderItems(pId: any, quantity: HTMLInputElement, sparePartItem: any): void {

  let product = this.products.find(p => p.id == Number(pId.value));

  let orderItem: IOrderItems = {
    id : Number(),
    productId: Number(pId.value),
    sparePartId: Number(sparePartItem.value),
    quantity: Number(quantity.value)
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
 const insert = this.orderItems.at(i).patchValue({
   quantity : this.editForm.get('quantity').value
 });
 console.log(insert);
}


private buildOrderItem(orderItem: IOrderItems): FormGroup {
  return this.fb.group({
    productId: [orderItem.productId, [Validators.required]],
    quantity: [orderItem.quantity, [Validators.required]],
    sparePartId: [orderItem.sparePartId, [Validators.required]],
  });

}

getProductName(id: number): string {
  if (this.products) {
    return this.products.find(p => p.id == id).name;
  }
}


getSparePartName(id: number): string {
  if (this.spareParts) {
    return this.spareParts.find(p => p.id == id).name;
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
  this.quantity = event.data.quantity;
  this.displayDialog = true;
  this.editForm.patchValue({
    quantity : this.quantity
  })
}

saveItem(){
  this.displayDialog = false;
}





  }
















