import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserProfile } from './IUserProfile';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
baseUrl : string = 'api/User';

constructor(private http : HttpClient) { }


getProfile():Observable<IUserProfile>{
  return this.http.get<IUserProfile>(`${this.baseUrl}/Profile`);
}

updateProfile(userProfile : IUserProfile){
   return this.http.put<IUserProfile>(`${this.baseUrl}/Profile`,userProfile);

} 
}
