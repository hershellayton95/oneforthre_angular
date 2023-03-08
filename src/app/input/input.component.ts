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

  setValue(value: String): void {
    this.value = value
  }

  onInput(event: Event): void {
    this.setValue((<HTMLInputElement>event.target).value);
  }
}
