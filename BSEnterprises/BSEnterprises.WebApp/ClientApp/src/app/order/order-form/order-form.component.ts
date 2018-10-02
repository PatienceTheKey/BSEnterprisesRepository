import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Iorder, IOrderItems } from '../iorder';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { IProduct } from '../../master/components/product/iproduct';
import { ISparePart } from '../../master/components/spare-part/ispare-part';
import { ProductService } from '../../master/components/product/product.service';
import { SparePartService } from '../../master/components/spare-part/spare-part.service';
import { EngineerService } from '../../master/components/engineer/engineer.service';

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
  sparePart: ISparePart[];
  orderForm : FormGroup;
  constructor(private orderService : OrderService,
              private route : ActivatedRoute,
              private fb : FormBuilder,
              private productService: ProductService,
              private engineerService: EngineerService,
              private sparePartService: SparePartService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getOrder(this.id);
  });

  this.orderForm = this.fb.group({
    engineerId :[],
    orderDate : new Date(),
    orderItems : this.fb.array([])
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


      // Update the data on the form
      this.orderForm.patchValue({

        id: this.order.id,
        engineerId: this.order.engineerId,
        orderDate : this.order.orderdate
      });
      for (var i = 0; i < this.order.orderItems.length; i++) {
        this.orderItems.push(this.buildPriceListItem(this.order.orderItems[i]));
      }

    }
  }

    get orderItems(): FormArray {
      return <FormArray>this.orderForm.get('orderItems');
    }

    addOrderItems(pId: any, quantity: HTMLInputElement, sparePartItem: any): void {

  let product = this.products.find(p => p.id == Number(pId.value));

  let orderItem: IOrderItems = {
    productId: Number(pId.value),
    sparePartId: Number(sparePartItem.value),
    quantity: Number(quantity.value)
  };

  if (this.isValidOrderItem(orderItem)) {

    this.orderItems.push(this.buildPriceListItem(orderItem));

    quantity.value = null;
    pId.value = null;
    sparePartItem.value = null;
    pId.focus();
    return;
  }

  alert("Not a valid Input");
}


removeItem(i : number){
  this.orderItems.removeAt(i);
}



private buildPriceListItem(orderItem: IOrderItems): FormGroup {
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
  if (this.sparePart) {
    return this.sparePart.find(p => p.id == id).name;
  }
}



  }










// p

// private isValidPriceListItem(priceListItem: PriceListItem): boolean {
//   let result: boolean = true;



//   if (isNaN(Number(priceListItem.productId)) || isNaN(Number(priceListItem.price)))
//     result = false;

//   return result;
// }
// removeLine(i: number): void {
//   this.priceListItems.removeAt(i);
// }


// getProductName(id: number): string {
//   if (this.products) {
//     return this.products.find(p => p.id == id).name;
//   }
// }

// savePriceList(): void {


//   let p = Object.assign({}, this.priceList, this.priceListForm.value);

//   this.priceListService.save(p, this.id)
//     .subscribe(() => this.onSaveComplete());

// }

// private onSaveComplete(): void {

//   let displayMsg = this.id == 0 ? "Saved" : "Updated";


//   this.router.navigate(['../'], { relativeTo: this.route });
// }



// }