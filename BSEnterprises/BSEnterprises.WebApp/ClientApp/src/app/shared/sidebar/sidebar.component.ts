import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
          label: 'Master',expanded : true,
          
          items: [
                  {label: 'Company', routerLink:['/master/company']},
                  {label: 'Engineer', routerLink:['/master/engineer']},
                  {label: 'Product', routerLink:['/master/product']},
                  {label: 'Spare-Part', routerLink:['/master/spare-part']},
          ]
      },
     
      {
          label: 'Orders', expanded : true,
             items : [
               { label : 'List', routerLink : ['/order/orders']}
             ]                     
          // items: [
          //         {label: 'Order', routerLink:['/authenticated/sales']}
          //         // {label: 'Issue Note', routerLink:['/customer']},
          //         // {label: 'Advanced Received'}
          // ]
      },
      
      {
             },


     
    ];
  
}
}