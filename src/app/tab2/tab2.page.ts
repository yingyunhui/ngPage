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

  isSubmit=false

  constructor(private yyh: YYh) {}

  handleSubmit(){
    this.isSubmit=true;
    this.yyh.post("example",this.user);
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
