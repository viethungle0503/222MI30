import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-quadratic-equation',
  templateUrl: './quadratic-equation.component.html',
  styleUrls: ['./quadratic-equation.component.css'],
})
export class QuadraticEquationComponent {
  @ViewChild('varA') variableA!: ElementRef;
  @ViewChild('varB') variableB!: ElementRef;
  @ViewChild('varC') variableC!: ElementRef;
  public quadraticEquation = new Quadratic();
  public result :string = '';
  clear() {
    this.quadraticEquation.a = '';
    this.quadraticEquation.b = '';
    this.quadraticEquation.c = '';
    this.result = '';
  }
  setResult() {
    if(this.quadraticEquation.a == '0') {
      alert("Hệ số a phải khác 0");
      this.variableA.nativeElement.value ='';
      this.variableA.nativeElement.focus();
      return;
    }
    this.result = this.quadraticEquation.findSolution();
  }
}
class Quadratic {
  public a?: string;
  public b?: string;
  public c?: string;
  constructor();
  constructor(x: string, y: string, z: string) 
  constructor(x?: string, y?: string, z?: string) {
    this.a = (x);
    this.b = (y);
    this.c = (z);
  }
  findSolution() {
    const x = Number(this.a);
    const y = Number(this.b);
    const z = Number(this.c);
    let delta = (y * y) - (x * z * 4);
    let result : string = "";
    if(delta < 0) {
      result = `Phương trình vô nghiệm`;
    }
    else {
      let x1= (-y + Math.sqrt(delta)) / (2*x);
      let x2= (-y - Math.sqrt(delta)) / (2*x);
      result = `x1=${x1} ; x2=${x2}`;
    }
    return result;
    
  }
}
