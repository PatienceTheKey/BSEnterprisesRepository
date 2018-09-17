import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ConfirmationService, Message, LazyLoadEvent } from 'primeng/api';
import { IProduct } from 'src/app/master/components/product/iproduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: IProduct[];
  id:number=null;
  selectedProduct: IProduct;
  displayDialogDelete : boolean;
  cols : any[];
  msgs: Message[] = [];
  loading : boolean;
  datasource : IProduct[];
  totalRecords : number;
  
   constructor(private productService: ProductService, 
               private router: Router,
               private confirmationService:ConfirmationService) { }
 
   ngOnInit() {
     this.getProducts();
     
     this.cols = [
      { field: 'id', header: 'Sn.', width: '5%' },
      { field: 'name', header: 'Name', width: '28%' },
      { field: 'price', header: 'Price ', width: '28%' },
      { field: 'companyId', header: 'Company', width: '28%' },

      ];
     
      this.loading = true;
   }
   getProducts(){
     this.productService.getAll().subscribe(product=>{
       this.productList = product;
       this.datasource = this.productList;
       this.totalRecords = this.datasource.length;
     });
   }
    
    productToCreate(){
      this.id=0;
      console.log(this.id);
      
    }
 
    productToEdit(event){
      this.id = event.data.id;
      console.log(this.id);
      
 
    }
 
    showDialogToDelete(Rowdata){
     this.selectedProduct = Rowdata;
     console.log(Rowdata);
     this.displayDialogDelete = true;
     
     this.confirmationService.confirm({
       message : 'Do you want to delete this record?',
       header: 'Delete Confirmation',
           icon: 'fa fa fa-fw fa-trash', 
           accept: () => {
             this.productService.delete(this.selectedProduct.id).subscribe(() =>{
               this.getProducts();
             this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
           });         
           },
         reject: () => {
             // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
         }
      
     });
   } 
 
    findselectedProductIndex():number{
      return this.productList.indexOf(this.selectedProduct)
    }
 
    loadProductsLazy(event: LazyLoadEvent) {
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
             this.productList = this.datasource.slice(event.first, (event.first + event.rows));
             this.loading = false;
         }
     }, 1000);
 }
}