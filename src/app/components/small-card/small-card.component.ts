import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-small-card',
	templateUrl: './small-card.component.html',
	styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
	@Input()
	cardId: string = '0';
	@Input()
	smallCardPhoto: string = '';
	@Input()
	smallCardTitle: string = '';
	@Input()
	smallCardDesc: string = '';

	constructor() {
	}

	ngOnInit(): void {}
}
