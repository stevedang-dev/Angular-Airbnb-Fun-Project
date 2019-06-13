import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './container/header-container/header-container.component';
import { NavComponent } from './components/nav/nav.component';
import { FilterComponent } from './components/filter/filter.component';
import { HttpClientModule } from '@angular/common/http'
import { DataService } from './services/data.service';
import { ClickOutsideModule } from 'ng-click-outside';
import { FilterHomeTypeFormComponent } from './components/filter-home-type-form/filter-home-type-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderContainerComponent, NavComponent, FilterComponent, FilterHomeTypeFormComponent],
  imports: [
    CommonModule,
	HttpClientModule,
	ClickOutsideModule,
	FormsModule,
	ReactiveFormsModule
  ],
  exports: [HeaderContainerComponent],
  providers: [DataService]
})
export class CoreModule { }

