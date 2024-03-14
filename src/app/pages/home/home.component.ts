import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake';

type DataFake = {
	id: number;
	photo: string;
	title: string;
	description: string;
};

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	noticias: DataFake[] = dataFake;
	ultimaNoticia: DataFake = this.noticias[this.noticias.length - 1];

	constructor() {}

	ngOnInit(): void {}
}
