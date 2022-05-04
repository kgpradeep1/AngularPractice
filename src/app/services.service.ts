import { Injectable } from '@angular/core';
import { Policy } from './policy';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  public  getPolicies() 
  {
 
    let policies:Policy[]; //array

    policies=
    [
        new Policy(1,'XIAOMI',35000),
        new Policy(2,'NOKIA',25000),
        new Policy(3,'MOTO',10000),
        new Policy(4,'SAMSUNG',10000),
        new Policy(5,'APPLE',40000),
    ]

    return policies;   
}
}
