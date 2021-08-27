import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
 

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated:EventEmitter<any> = new EventEmitter<{serverName: string, serverContent: string}>();

  @Output() bluePrintCreated:EventEmitter<any> =new EventEmitter<{serverName:string, serverContent:string}>();

  // Two Binding with Variable
  // newServerName:string = '';
  // newServerContent:string = ''; 
  
  // onAddServer() {
  //   this.serverCreated.emit({
  //     serverName: this.newServerName, 
  //     serverContent: this.newServerContent});
     
  // }
  // onAddBlueprint() {
  //   this.bluePrintCreated.emit({
  //     serverName: this.newServerName, 
  //     serverContent: this.newServerContent});    
  // }
  
  //Template Reference
    // Two Binding with Variable
  // newServerName:string = '';
  // newServerContent:string = ''; 
  // onAddServer() {
  //   this.serverCreated.emit({
  //     serverName: this.newServerName, 
  //     serverContent: this.newServerContent});
  // }
  // onAddBlueprint() {
  //   this.bluePrintCreated.emit({
  //     serverName: this.newServerName, 
  //     serverContent: this.newServerContent});    
  // }
  //Template Reference

  @ViewChild('serverContentInput', { static: false })
  serverContentInput!: ElementRef;
  onAddServer(nameInput:HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value});
     
  }
  onAddBlueprint(nameInput:HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value});    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
