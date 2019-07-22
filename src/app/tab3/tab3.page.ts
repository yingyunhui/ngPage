import { Component } from '@angular/core';

declare const BMap: any;
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
  
  ngOnInit() {
    let map = new BMap.Map("cjmap");
    map.centerAndZoom(new BMap.Point(121.62426,29.866786), 13);  // 初始化地图,设置中心点坐标和地图级别
	  map.setCurrentCity("宁波");          // 设置地图显示的城市 此项是必须设置的
	  map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
  }

  segmentChanged(event){
    console.log(event.target.value)
  }

}
