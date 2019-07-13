import { Component, OnInit } from '@angular/core';
import { YYh } from '../../providers/yyh';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  content:string;
  constructor(private yyh: YYh) {
    
    //console.log(localStorage.getItem("token"))
    //yyh.post("/jkb-api/user/testLogin",{});
    yyh.post("/jkb-api/logins",{username:"yingyunhui",password:"Nb123456"}).then(r=>{
      if(r.data!='') localStorage.setItem("token",r.data.token);
    },e=>{
      
    })
  }

  ngOnInit() {
  }

}
