import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devops-tools',
  templateUrl: './devops-tools.component.html',
  styleUrls: ['./devops-tools.component.scss']
})
export class DevopsToolsComponent implements OnInit {
  activeIndex: number = 0;
  scrollableTabs: any[] = Array.from({ length: 50 }, (_, i) => ({ title: "Title", content: "Content" }));
  constructor() { }

  ngOnInit() {
  }

}
