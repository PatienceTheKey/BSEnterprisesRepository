import { NgModule } from '@angular/core';
import { CompanyService } from './services/company.service';
import { EngineerService } from './services/engineer.service';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyFormComponent } from './components/company-form/company-form.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedUserComponent } from '../shared/components/authenticated-user/authenticated-user.component';

// const routes : Routes = [
//     {
//         path : 'master',
//         component : AuthenticatedUserComponent,
//         children : [
//             {
//                 path : 'company',component : CompanyListComponent
//             },
//             {
//                 path : "company/:id", component : CompanyFormComponent
//             }
//         ]
//     }
// ]

@NgModule({
    imports: [
        SharedModule,
        // RouterModule.forChild(routes)
    ],
    exports: [
        
    ],
    declarations: [CompanyListComponent, CompanyFormComponent],
    providers: [
        CompanyService,
        EngineerService
    ],
})
export class MasterModule { }
