import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { MegaMenuModule } from 'primeng/megamenu';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenuModule } from 'primeng/menu';
import { SlideMenuModule } from 'primeng/slidemenu';

@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    MegaMenuModule,
    CarouselModule,
    TagModule,
    TabViewModule,
    PanelModule,
    DialogModule,
    SidebarModule,
    InputTextareaModule,
    MenuModule,
    SlideMenuModule
  ],
  exports: [
    MenubarModule,
    InputTextModule,
    ButtonModule,
    MegaMenuModule,
    CarouselModule,
    TagModule,
    TabViewModule,
    PanelModule,
    DialogModule,
    SidebarModule,
    InputTextareaModule,
    MenuModule,
    SlideMenuModule
  ],
  declarations: []
})
export class SharedModule { }
