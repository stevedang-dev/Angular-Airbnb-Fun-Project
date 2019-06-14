import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterBarState } from '../../container/header-container/header-container.component';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.less']
})
export class FilterComponent implements OnInit {

    @Input() filterBarState: FilterBarState;
    @Output() toggleFilterDropdown = new EventEmitter<string>();
    @Output() closeFilterDropdown = new EventEmitter<string>();
    @Output() applyFilters = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
    }



}
