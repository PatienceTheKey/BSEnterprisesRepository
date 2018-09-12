import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { ICompany } from '../../interface/company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: ICompany[];
  columnsToDisplay = ['name'];

  constructor(private companyService : CompanyService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(){
    this.companyService.getAll().subscribe(response=>this.companies = response)
      
  }

}
