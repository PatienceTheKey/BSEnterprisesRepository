import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StateList } from '../../shared/state-list';
import { IUserProfile } from './IUserProfile';
import { UserProfileService } from './user-profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from 'primeng/api';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  stateList = StateList;
  userprofileForm: FormGroup;
  action: string;
  userprofile : IUserProfile;
  pageTitle;
  msgs:Message[] = [];
  constructor(private fb : FormBuilder,
              private userProfileService : UserProfileService,
              private route : ActivatedRoute,
              private router : Router) { }

  ngOnInit() {
    this.userprofileForm = this.fb.group({
      id: '',
      name: ['', [Validators.required, Validators.minLength(2)]],
      gstin: ['', [Validators.required, Validators.pattern('[0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9A-Za-z]{1}[Z]{1}[0-9a-zA-Z]{1}')]],
      
      email: ['', [ Validators.email]],
      address: [''],
      
      contactNumber: ['', ],
      
      bankName: [''],
      accountNumber: [''],
      ifscCode: [''],
      state:[''],
      
      termsAndCondition: ['',[]],
      
      pan : ['']
  });

  this.userProfileService.getProfile().subscribe(up => {
    this.userprofile = up;
    console.log(up);
    this.userprofileForm.patchValue({
        id: this.userprofile.id,
        name: this.userprofile.name,
        gstin: this.userprofile.gstin,
        
        email: this.userprofile.email,
        address: this.userprofile.address,
        contactNumber: this.userprofile.contactNumber,
        
        bankName: this.userprofile.bankName,
        accountNumber: this.userprofile.accountNumber,
        ifscCode: this.userprofile.ifscCode,
        state: this.userprofile.state,
        
        termsAndCondition: this.userprofile.termsAndCondition,
        
        pan : this.userprofile.pan
    });
        this.route.params.subscribe(params => {
            this.action = params['action'];
            if (this.action == 'edit') {
                this.userprofileForm.enable();
            }
            else {
                this.userprofileForm.disable();
            }
        
    });
});
this.pageTitle = `User Profile`;


  }

  onSave(): void {

    if (this.userprofileForm.dirty && this.userprofileForm.valid) {

        let p = Object.assign({}, this.userprofile, this.userprofileForm.value);
     
         this.userProfileService.updateProfile(p)
            .subscribe(() => this.onSaveComplete());
  
  

    }


    else if (!this.userprofileForm.dirty) {
        this.onSaveComplete();
    }
}

private onSaveComplete(): void {
  
  this.msgs = [];
  this.msgs.push({
    severity : 'success',
    summary : 'Success Message',
    detail : 'User Profile Updated' 
  });

  // Reset the form to clear the flags
  this.userprofileForm.reset();
  this.router.navigate(['/master/engineer']);
}
}
