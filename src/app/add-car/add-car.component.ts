import {Component, OnInit,Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'add-car',
    templateUrl: './add-car.component.html',
    styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

    carName = '';
    carYear = 2017;
  @Output('putCar')  carEmitter = new EventEmitter<{name: string, year: number}>();
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
