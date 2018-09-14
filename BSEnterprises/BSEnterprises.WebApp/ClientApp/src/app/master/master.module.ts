import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedUserComponent } from '../shared/components/authenticated-user/authenticated-user.component';
import { EngineerFormComponent } from './components/engineer/engineer-form/engineer-form.component';
import { EngineerListComponent } from './components/engineer/engineer-list/engineer-list.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { SpareParFormComponent } from './components/spare-part/spare-par-form/spare-par-form.component';
import { SparePartListComponent } from './components/spare-part/spare-part-list/spare-part-list.component';
import { CompanyListComponent } from './components/company/company-list/company-list.component';
import { CompanyFormComponent } from './components/company/company-form/company-form.component';
import { CompanyService } from './components/company/company.service';
import { EngineerService } from './components/engineer/engineer.service';
import { ProductService } from './components/product/product.service';
import { SparePartService } from './components/spare-part/spare-part.service';

const routes: Routes = [
    {
        path: 'master',
        component: AuthenticatedUserComponent,
        children: [
            { path: 'company', component: CompanyListComponent },
            { path: "company/:id", component: CompanyFormComponent },
            { path: "engineer/:id", component: EngineerFormComponent  },
            { path: "engineer", component: EngineerListComponent },
            { path: "product", component: ProductListComponent },
            { path: "product/:id", component: ProductFormComponent },
            { path: "spare-part", component: SparePartListComponent },
            { path: "spare-part/:id", component: SpareParFormComponent },
            { path: '', redirectTo: 'company', pathMatch: 'full' },
            

        ]
    }
]

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports: [

    ],
    declarations: [CompanyListComponent,
        CompanyFormComponent,
        EngineerFormComponent,
        EngineerListComponent,
        ProductFormComponent,
        ProductListComponent,
        SpareParFormComponent,
        SparePartListComponent],
   
        providers: [
        CompanyService,
        EngineerService,
        ProductService,
        SparePartService],
})
export class MasterModule { }
