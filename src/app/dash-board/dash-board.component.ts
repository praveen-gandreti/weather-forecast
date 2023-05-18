import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {

  weather:string|any|undefined=""
  form = new FormGroup({
    city:new FormControl()
  })
  getCity()
  {
    this.weather=this.form.value.city
  }

}
