import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './container/header-container/header-container.component';
import { NavComponent } from './components/nav/nav.component';
import { FilterComponent } from './components/filter/filter.component';
import { HttpClientModule } from '@angular/common/http'
import { DataService } from './services/data.service';
@NgModule({
  declarations: [HeaderContainerComponent, NavComponent, FilterComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [HeaderContainerComponent],
  providers: [DataService]
})
export class CoreModule { }
