import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OptionsComponent } from './options/options.component';
import {MatButtonModule} from '@angular/material';
import { ButtonsComponent } from './buttons/buttons.component';
import { SitesComponent } from './sites/sites.component';
import { AboutComponent } from './about/about.component';
import {MatCardModule} from '@angular/material/card';
import { MiniBtnsComponent } from './mini-btns/mini-btns.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent,
    ButtonsComponent,
    SitesComponent,
    AboutComponent,
    MiniBtnsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
