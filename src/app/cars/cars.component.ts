import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

    carName = '';
    carYear = 1968;

    cars:{name:string, year:number}[] = [{
        name: 'Ford',
        year: 2015
    }, {
        name: 'Mazda',
        year: 2010
    }, {
        name: 'Audi',
        year: 2017
    }];

    constructor() {
    }

    ngOnInit() {
    }

    updateCarList(car: {name:string, year:number}) {
        this.cars.push(car);
        console.log(car);
    }
}
