import {Component, OnInit,Output, EventEmitter} from '@angular/core';
import flatpickr from "flatpickr";
@Component({
    selector: 'add-car',
    templateUrl: './add-car.component.html',
    styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

    carName = '';
    carYear = 2017;
  @Output('putCar')  carEmitter = new EventEmitter<{name: string, year: number}>();
 // flatpickr(".year");
    constructor() {
    }

    ngOnInit() {
    }

     addCar(){
     this.carEmitter.emit({
     name:this.carName,
     year: this.carYear
     })
     }
}
