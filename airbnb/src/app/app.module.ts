import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { DataService } from './modules/core/services/data.service';
import { ClickOutsideModule } from 'ng-click-outside';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ClickOutsideModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
