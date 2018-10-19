import { Component, OnInit } from '@angular/core';
import { IBillingSparePart, IBillingSpareItems } from '../ibilling-spare-part';
import { ISparePart } from '../../master/components/spare-part/ispare-part';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { BillingSparePartService } from '../billing-spare-part.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SparePartService } from '../../master/components/spare-part/spare-part.service';


@Component({
  selector: 'app-billing-spare-part',
  templateUrl: './billing-spare-part.component.html',
  styleUrls: ['./billing-spare-part.component.css']
})
export class BillingSparePartComponent implements OnInit {

  id : number;
  billingSparePart : IBillingSparePart;
  pageTitle;
  
  spareParts: ISparePart[];
  
  billingSparePartForm : FormGroup;
 
  sparePartSelectList : SelectItem[];
  billingSparePartItem : IBillingSpareItems;
  index: any;

  


  constructor(private billingSparePartService : BillingSparePartService,
              private route : ActivatedRoute,
              private sparePartService: SparePartService,
              private fb : FormBuilder,
              private router : Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getBillingSparePart(this.id);
  });

    this.sparePartService.getAll().subscribe(res => {
    this.spareParts = res;
    this.sparePartSelectList = this.spareParts.map(el => ({
      label : el.name,
      value : el.id,
    }))

   
  })

  this.billingSparePartForm = this.fb.group({
    customerName :[],
    date : new Date(),
customerAddress: [],
customerGstin: [],
customerContact: [],
placeOfSupply: [],
totalInvoiceValue: 0,
billingSparePartItems: this.fb.array([])

  })

 
}






  getBillingSparePart(id){
     this.billingSparePartService.getOne(id).subscribe((billingSparePart:IBillingSparePart) => this.billingSparePartRetreived(billingSparePart))
  }


  private billingSparePartRetreived(billingSparePart: IBillingSparePart): void {

    if (this.billingSparePartForm) {
      this.billingSparePartForm.reset();
    }

    this.billingSparePart = billingSparePart;

    if (this.billingSparePart.id == 0) {
      this.pageTitle = 'Add Tax Invoice';
    }

    else {
      this.pageTitle = `Edit Tax Invoice: `;
      let patchDate = new Date(this.billingSparePart.date); 

      // Update the data on the form
      this.billingSparePartForm.patchValue({

        id: this.billingSparePart.id,
        customerName: this.billingSparePart.customerName,
        customerAddress: this.billingSparePart.customerAddress,
        customerContact: this.billingSparePart.customerContact,
        customerGstin: this.billingSparePart.customerGstin,
        date: this.billingSparePart.date,
        placeOfSupply: this.billingSparePart.placeOfSupply,
        totalInvoiceValue: this.billingSparePart.totalInvoiceValue
      });
      for (var i = 0; i < this.billingSparePart.billingSparePartItems.length; i++) {
        this.billingSparePartItems.push(this.buildBillingSparePartItem(this.billingSparePart.billingSparePartItems[i]));
      }

    }
  }

  getProductPriceAndHsn(pId: HTMLInputElement, rate: HTMLInputElement, hsnCode: HTMLInputElement): void {
    var prod = this.spareParts.find(p => p.id == Number(pId.value));
    // var product = this.spareParts.find(p => p.id == Number(pId.value)).id;
    
    if (prod != null) {
        rate.value = prod.price.toString();  
        hsnCode.value = prod.hsnSac;    
        }
    }

    get billingSparePartItems(): FormArray {
      return <FormArray>this.billingSparePartForm.get('billingSparePartItems');
    }

    addBillingSparePartItems(pId: HTMLInputElement, quantity: HTMLInputElement, dis: HTMLInputElement, hsnCode : HTMLInputElement, 
                                  rate: HTMLInputElement, 
                ): void {

                  let product = this.spareParts.find(p => p.id == Number(pId.value));
                  if (product==null) {
                      alert("Please Select a Spare Part");
                      return;
                  }
        
      
  let igstAmount: number;
  let cgstAmount: number;
  let sgstAmount: number;
  let taxableValue = (+quantity.value * +rate.value) * (1 - (+dis.value/100));
  
  var billingSparePartItem: IBillingSpareItems = {
    
    productId: Number(pId.value),
    quantity: Number(quantity.value),
    discount: Number(dis.value),
    taxRate: product.rateOfTax,
    rate: Number(rate.value),
    taxableValue:  taxableValue,
    hsnCode: Number(hsnCode.value),
    igstAmount: 0,
    cgstAmount: (taxableValue * product.rateOfTax/100)/2,
    sgstAmount: (taxableValue * product.rateOfTax/100)/2,

    total: taxableValue + (taxableValue * product.rateOfTax/100)

  
  
  
  };

   this.billingSparePartItems.push(this.buildBillingSparePartItem(billingSparePartItem));
    // cId.value = null;
    // quantity.value = null;
    // pId.value = null;
    // sparePartItem.value = null;
    pId.focus();
    return;
  
}

removeItem(i : number){
  this.billingSparePartItems.removeAt(i);
}



private buildBillingSparePartItem(billingSparePartItem: IBillingSpareItems): FormGroup {
  return this.fb.group({
    productId: [billingSparePartItem.productId, [Validators.required]],
    quantity: [billingSparePartItem.quantity, [Validators.required]],
    discount: [billingSparePartItem.discount, [Validators.required]],
    taxRate: [billingSparePartItem.taxRate, [Validators.required]],
    rate: [billingSparePartItem.rate, [Validators.required]],
    taxableValue : [billingSparePartItem.taxableValue,[Validators.required]],
    igstAmount: [billingSparePartItem.igstAmount,[Validators.required]],
    cgstAmount: [billingSparePartItem.cgstAmount,[Validators.required]],
    sgstAmount: [billingSparePartItem.sgstAmount,[Validators.required]],
    hsnCode: [billingSparePartItem.hsnCode,[Validators.required]],
    total: [billingSparePartItem.total,[Validators.required]],
  });

}


saveBillingSparePart(): void {


  let p = Object.assign({}, this.billingSparePart, this.billingSparePartForm.value);

  this.billingSparePartService.save(p, this.id)
    .subscribe(() => this.onSaveComplete());

}

private onSaveComplete(): void {

  let displayMsg = this.id == 0 ? "Saved" : "Updated";
  this.router.navigate(['../'], { relativeTo: this.route });
}

getSpartPartName(id: number): string {
  if (this.spareParts) {
      return this.spareParts.find(sp => sp.id == id).name;
  }
}
}
