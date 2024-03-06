import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  loginObj: any = {
    userName: '',
    password: ''
  }

  constructor(private http:HttpClient, private router:Router) { }

  getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  isLogin(){
    if(this.loginObj.userName == "Ravikanth" && this.loginObj.password == "Ravikanth@123"){
       this.router.navigateByUrl('/products')
    } else {
      alert('Invalid Credentials')
    }
  }
}
