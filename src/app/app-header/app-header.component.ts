import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  @Output() featureSelected:EventEmitter<string> = new EventEmitter<string>();

  onSelect(feature:string){
    this.featureSelected.emit(feature);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
