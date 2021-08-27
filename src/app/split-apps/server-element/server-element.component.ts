import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  //encapsulation:ViewEncapsulation.Emulated // none, shadowDom
  encapsulation:ViewEncapsulation.ShadowDom
})
export class ServerElementComponent implements OnInit {
  // not working @Input() element:{type:string, name:string, content:string}; 
  @Input('srvElement') element:any={};
  constructor() {
    console.log('constructor call');
   }

  ngOnInit(): void {
    console.log('ngOnInit call');
  }

}
