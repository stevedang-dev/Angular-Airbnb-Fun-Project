import { Component, OnInit } from '@angular/core';
import { HomeTypes, Filters } from 'src/app/modules/core/container/header-container/header-container.component';
import { DataService } from 'src/app/modules/core/services/data.service';

export interface Home {
  type: HomeTypes;
  title: string;
  location: string;
  price: number;
  image_url: string;
  rating: {
    count: number;
    stars: number;
  };
}

@Component({
  selector: 'app-home-list-container',
  templateUrl: './home-list-container.component.html',
  styleUrls: ['./home-list-container.component.less']
})
export class HomeListContainerComponent implements OnInit {
  homes$: any;
  
  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    this.homes$ = this.dataService.getHomes$();
    this.dataService.getFiltersFromUrlQueryParams().subscribe((filters: Filters) => {
      console.log(filters);
      this.dataService.loadHomes(filters);
    });
  }

}
