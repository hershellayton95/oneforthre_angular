import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  value: String = "";
  type: String = "text";
  placeholder: String = "inserisci un nome";

}
