import { Component, ViewChild, ElementRef, VERSION} from '@angular/core';

@Component({
  selector: 'app-binding-event',
  templateUrl: './binding-event.component.html',
  styleUrls: ['./binding-event.component.css'],
})
export class BindingEventComponent {
  @ViewChild('variableA') inputA!: ElementRef<HTMLInputElement>;
  @ViewChild('variableB') inputB!: ElementRef<HTMLInputElement>; // accessing the reference element
  public firstInput:string = '';
  public secondInput:string = '';
  onClick(event: any) {
    alert(event.pointerId);
  }
  onSubmit(value: string) {
    alert(value);
  }
  onPlus(a: string, b: string) {
    alert(Number(a) + Number(b));
  }
  onMinus(a: string, b: string) {
    alert(Number(a) - Number(b));
  }
  onMultiple(a: string, b: string) {
    alert(Number(a) * Number(b));
  }
  onDivide(a: string, b: string) {
    if (Number(b) == 0) {
      alert('Mẫu phải khác không');
      return;
    }
    alert((Number(a) / Number(b)).toFixed(2));
  }
  onReset() {
    // this.firstInput = '';
    // this.secondInput = '';
    this.inputA.nativeElement.value = '';
    this.inputB.nativeElement.value = '';
  }

}
