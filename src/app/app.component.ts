import { Component } from '@angular/core';
import { Policy } from './policy';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  policies : Policy[] | undefined; //array
   policyService; //variable
 
   constructor()
   {
     //creating an instance for the PolicyService class to access getPolicies()
     this.policyService=new ServicesService();
   }
   //creating a function in app.component to access the getPolicies() from PolicyService
   getPolicies()
  {
     //accessing the getpolicies() method from policyService class
     //and store it in the array policies
     this.policies=this.policyService.getPolicies();
   }
    //ngStyle
  color: string = 'red';
}
