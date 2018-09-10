import { NgModule } from '@angular/core';
import { CompanyService } from './services/company.service';
import { EngineerService } from './services/engineer.service';



@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        CompanyService,
        EngineerService
    ],
})
export class MasterModule { }
