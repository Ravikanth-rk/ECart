import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private api:ApiService) { }

  ngOnInit(): void {
  }

  loginObj: any = {
    userName: '',
    password: ''
  }

  onLogin(){
    if(this.loginObj.userName == "Ravikanth" && this.loginObj.password == "Ravikanth@123"){
       this.router.navigateByUrl('/products')
    } else {
      alert('Invalid Credentials')
    }
  }


}
