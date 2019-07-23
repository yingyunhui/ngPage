import { Component } from '@angular/core';
import { YYh } from '../../providers/yyh';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  res:string= "loading...";
  constructor(private yyh: YYh) {
    //yyh.post("/jkb-api/login",{username:"yingyunhui",password:"Nb123456"},false);
  }
  tempClick(event){
    console.log(event);
  }
}
