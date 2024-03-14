import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
	photoCover: string = '';
	contentTitle: string = '';
	contentDescription: string = '';
	private Id: string | null = '0';

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe((value) => (this.Id = value.get('id')));
		if (this.Id) this.setValuesToComponent(this.Id);
	}

	setValuesToComponent(id: string) {
		const content = dataFake.find((data) => data.id === parseInt(id));

		if (content) {
			this.photoCover = content.photo;
			this.contentTitle = content.title;
			this.contentDescription = content.description;
		}
	}
}
