import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'src/shared/shared.module';
import { HeaderComponent } from 'src/components/header/header.component';
import { AddressesComponent } from 'src/components/addresses/addresses.component';
import { BlogsComponent } from 'src/components/blogs/blogs.component';
import { ClientsComponent } from 'src/components/clients/clients.component';
import { DevExpertiesComponent } from 'src/components/dev-experties/dev-experties.component';
import { DevServicesComponent } from 'src/components/dev-services/dev-services.component';
import { DevTimelinesComponent } from 'src/components/dev-timelines/dev-timelines.component';
import { DevopsApproachComponent } from 'src/components/devops-approach/devops-approach.component';
import { DevopsPartnershipsComponent } from 'src/components/devops-partnerships/devops-partnerships.component';
import { DevopsToolsComponent } from 'src/components/devops-tools/devops-tools.component';
import { FaqsComponent } from 'src/components/faqs/faqs.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { HomeComponent } from 'src/components/home/home.component';
import { ProjectsComponent } from 'src/components/projects/projects.component';
import { SliderComponent } from 'src/components/slider/slider.component';
import { StatsComponent } from 'src/components/stats/stats.component';
import { CarousalComponent } from 'src/components/carousal/carousal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddressesComponent,
    BlogsComponent,
    ClientsComponent,
    DevExpertiesComponent,
    DevServicesComponent,
    DevTimelinesComponent,
    DevopsApproachComponent,
    DevopsPartnershipsComponent,
    DevopsToolsComponent,
    FaqsComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    SliderComponent,
    StatsComponent,
    CarousalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
