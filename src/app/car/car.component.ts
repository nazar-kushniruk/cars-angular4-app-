import {Component, OnInit ,Input,Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
    carName = 'Ford';
    carYear = 2017;
@Input('carsItem') carItem :{name: string, year: number};
@Output('putCar') car :[{name: string, year: number}];
   /* @Input car: [{name: string, year: number}];*/
    constructor() {
    }

    ngOnInit() {
    }
    
}
