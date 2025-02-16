import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
})
export class MyComponentComponent {
  constructor() {}
  myVar = 'Hello Angular';
  getMyVar() {
    return this.myVar
  }
  getCapitalWords() {
    let length = this.myVar.length;
    let strings ="";
    for(let i = 0; i < length; i++) {
      let char = this.myVar.charAt(i);
      if(char == char.toUpperCase()) {
        strings += char;
      };
    }
    return strings;
  };
  getNormalWords() {
    let length = this.myVar.length;
    let strings ="";
    for(let i = 0; i < length; i++) {
      let char = this.myVar.charAt(i);
      if(char == char.toLowerCase()) {
        strings += char;
      };
    }
    return strings;
  };
}
