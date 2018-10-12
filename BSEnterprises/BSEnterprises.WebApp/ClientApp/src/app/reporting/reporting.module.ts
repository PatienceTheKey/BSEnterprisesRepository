import { NgModule } from '@angular/core';
import { ReportingService } from './reporting.service';
import { SharedModule } from '../shared/shared.module';
import { ReportingComponent } from './reporting/reporting.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedUserComponent } from '../shared/components/authenticated-user/authenticated-user.component';
import { SparePartWiseReportingComponent } from './spare-part-wise-reporting/spare-part-wise-reporting.component';

const routes: Routes = [
    {
        path: 'reporting',
        component: AuthenticatedUserComponent,
        children: [
            {path : 'reportings' , component : ReportingComponent},
            {path : 'inventories',component : SparePartWiseReportingComponent},
            { path: '', redirectTo: 'reportings', pathMatch: 'full' },
  
        ]
    }
  ]


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [ReportingComponent, SparePartWiseReportingComponent],
    providers: [ReportingService],
})
export class ReportingModule { }
