import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-split-apps',
  templateUrl: './split-apps.component.html',
  styleUrls: ['./split-apps.component.scss']
})
export class SplitAppsComponent implements OnInit {
  serverElements:any[] = [{type:'server', name:'TestServer', content:'Just a test!'}];
   
  onServerAdded(serverData
    :{serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData:{serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
