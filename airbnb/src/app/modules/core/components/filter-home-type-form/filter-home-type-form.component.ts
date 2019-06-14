import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HomeTypes } from '../../container/header-container/header-container.component';

@Component({
  selector: 'app-filter-home-type-form',
  templateUrl: './filter-home-type-form.component.html',
  styleUrls: ['./filter-home-type-form.component.less']
})
export class FilterHomeTypeFormComponent implements OnInit {

	@Output() applyHomeTypeFilter = new EventEmitter<string[]>();
	@Input() defaultFilters: HomeTypes[];
	form: FormGroup;

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit() {
		this.form = this.formBuilder.group({
			'Entire apartment': [this.defaultFilters.includes('Entire apartment')],
			'Private room': [this.defaultFilters.includes('Private room')],
			'Tree house': [this.defaultFilters.includes('Tree house')],
			'Hotel room': [this.defaultFilters.includes('Hotel room')]
		});
	}

	submit(formValue: any): void {
		const homeTypes = Object.keys(formValue).filter(filter => formValue[filter]);

    	// Will pass homeTypes to the container component to make the API call and refresh the list.
    	console.log(homeTypes);
		this.applyHomeTypeFilter.next(homeTypes);
	}

}
