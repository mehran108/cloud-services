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
    PanelModule
  ],
  exports: [
    MenubarModule,
    InputTextModule,
    ButtonModule,
    MegaMenuModule,
    CarouselModule,
    TagModule,
    TabViewModule,
    PanelModule
  ],
  declarations: []
})
export class SharedModule { }
