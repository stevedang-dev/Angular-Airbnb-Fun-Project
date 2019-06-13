import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Home } from '../../homes/containers/home-list-container/home-list-container.component';
import { HttpClient } from '@angular/common/http';
import { delay, switchMap, filter } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Filters } from '../container/header-container/header-container.component';


export interface DataState<T> {
  loading: boolean;
  data: T;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private homes$ = new BehaviorSubject({loading: false, data: []});

  constructor(private activatedRoute: ActivatedRoute,
              private httpClient: HttpClient) { }

  getHomes$(): Observable<DataState<Home[]>> {
    return this.homes$.asObservable();
  }

  loadHomes(filters: Filters) {
    this.homes$.next({loading: true, data: []});
    this.httpClient.get<any[]>('assets/mocks/homes.json')
      .pipe(
        switchMap((homes: Home[]) => {
          if (filters.homeType.length) {
            return of(homes.filter((home: Home) => filters.homeType.includes(home.type)))
          }

          return of(homes);
        }),
        delay(1000)
      )
      .subscribe((homes: Home[]) => {
        this.homes$.next({loading: false, data: homes});
    });
  }

  getFiltersFromUrlQueryParams(): Observable<Filters> {
    return this.activatedRoute.queryParams.pipe(
      switchMap(params => {
        // check params type:

        if (Array.isArray(params['home-type'])) {
          return of({
            homeType: [params['home-type']]
          })
        }

        if (typeof params['home-type'] === 'string') {
          return of({
            homeType: [params['home-type']]
          })
        }

        return of({
          homeType: []
        })
      })
    );
  }
}
