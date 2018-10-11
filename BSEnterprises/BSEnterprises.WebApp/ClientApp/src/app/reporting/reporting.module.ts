import { NgModule } from '@angular/core';
import { ReportingService } from './reporting.service';
import { SharedModule } from '../shared/shared.module';
import { ReportingComponent } from './reporting/reporting.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedUserComponent } from '../shared/components/authenticated-user/authenticated-user.component';

const routes: Routes = [
    {
        path: 'reporting',
        component: AuthenticatedUserComponent,
        children: [
            {path : 'reportings' , component : ReportingComponent},
            
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
    declarations: [ReportingComponent],
    providers: [ReportingService],
})
export class ReportingModule { }
