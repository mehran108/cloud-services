import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    color:string = 'header-black';
    sidebarVisible: boolean = false;
    hovered = false;
    visible = false;
  public items!: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
          label: 'About',
          items: [
              {
                  label: 'Our Company',
              },
              {
                  label: 'How we work',
              },
              {
                  label: 'Core Team',
              },
              {
                  label: 'Agile Development',
              },
              {
                  label: 'Career',
              }
          ]
      },
      {
          label: 'Services',
          items: [
              {
                  label: 'Discover',
              },
              {
                  label: 'Design',
              },
              {
                  label: 'Engineer',
              },
              {
                  label: 'Scale'
              }
          ]
      },
      {
          label: 'Industries',
          items: [
              {
                  label: 'New',
              },
              {
                  label: 'Delete',
              },
              {
                  label: 'Search',
              }
          ]
      },
      {
          label: 'Portfolio'
      },
      {
          label: 'Blog'
      }
  ];
}
}
