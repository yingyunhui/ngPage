import { Component } from '@angular/core';
import { YYh } from '../../providers/yyh';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  user={
    userName:'',
    passWord:''
  }

  isSubmit=false;

  constructor(private yyh: YYh) {}
  
  isEmpty(key){
    let flg=false;
    let obj=this.user;
    if(obj[key]==null||obj[key]==''||obj[key]==undefined) flg=true;
    return flg;
  }
  handleSubmit(){
    this.isSubmit=true;
    console.log(this.user);
  }
  handleInputValue(event,key){
    switch(key){
      case 'userName':
        this.user.userName=event.target.value;
        break;
      case 'passWord':
        this.user.passWord=event.target.value;
        break;
    }
  }
}
