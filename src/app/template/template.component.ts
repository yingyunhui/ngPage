import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent implements OnInit {

  @Input() test: string;
    
  @Output() ihuClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  click() {
    this.ihuClick.emit('kkk');
  }

}
