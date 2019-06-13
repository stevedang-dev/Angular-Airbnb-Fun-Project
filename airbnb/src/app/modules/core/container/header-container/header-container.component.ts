import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

export type HomeTypes =
'Entire apartment' |
'Private room' |
'Tree house' |
'Hotel room';

export interface FilterBarState {
  homeType: { open: boolean };
}

export interface Filters {
  homeType: HomeTypes[]
}

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.less']
})
export class HeaderContainerComponent implements OnInit {

  filterBarState$ = new BehaviorSubject<FilterBarState>({ homeType: { open: false } });

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toggleFilterDropdown(filter: string) {
    const filters = this.filterBarState$.getValue();
    filters[filter].open = !filters[filter].open;

    this.filterBarState$.next(filters);
  }

  closeFilterDropdown(filter: string) {
    console.log('closeFilterDropdown');
    const filters = this.filterBarState$.getValue();
    filters[filter].open = false;

    this.filterBarState$.next(filters);
  }

  applyFilters(filters: Filters) {
    console.log(filters);
    this.closeFilterDropdown('homeType');
    this.router.navigate(['homes'], { queryParams: { 'home-type': filters.homeType }});
    console.log(this.router.url);
    
  }
}
