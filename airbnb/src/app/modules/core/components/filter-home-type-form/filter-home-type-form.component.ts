import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-home-type-form',
  templateUrl: './filter-home-type-form.component.html',
  styleUrls: ['./filter-home-type-form.component.less']
})
export class FilterHomeTypeFormComponent implements OnInit {
	form: FormGroup;

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit() {
		this.form = this.formBuilder.group({
			'Entire apartment': [],
			'Private room': [],
			'Tree house': [],
			'Hotel room': []
		});
	}

	submit(formValue: any): void {
		const homeTypes = Object.keys(formValue).filter(filter => formValue[filter]);

    	// Will pass homeTypes to the container component to make the API call and refresh the list.
    	console.log(homeTypes);

	}

}
