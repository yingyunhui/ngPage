import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { YYh } from '../../providers/yyh';
import { ModalPage } from '../modal/modal.page';

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

  isModal=false;

  constructor(private yyh: YYh, public modalCtrl: ModalController) {}
  
  isEmpty(key){
    let flg=false;
    let obj=this.user;
    if(obj[key]==null||obj[key]==''||obj[key]==undefined) flg=true;
    return flg;
  }
  handleSubmit(){
    this.isSubmit=true;
    console.log(this.user);
    this.presentModal();
  }
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'callback': function(data){
          console.log(1);
        }.bind(this)
      }
    });
    return await modal.present();
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
