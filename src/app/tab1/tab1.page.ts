import { Component } from '@angular/core';
import { YYh } from '../../providers/yyh';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  file:any;
  url:any;
  constructor(private yyh: YYh) {
    
  }
  tempClick(event){
    console.log(event);
  }

  OnFileSelected(event){
    this.file= event.target.files[0] as File;
  }
  OnUpload(){
    this.yyh.upload("/upload",'photo',this.file);
  }

  getUrl(){
    this.yyh.post("/jkb-api/download",{});
    this.url='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563975936502&di=c9957e4dd877c531d6517d533cc77c82&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201507%2F15%2F20150715211610_QA8vW.jpeg';
  }

  download(){
    
  }
}
