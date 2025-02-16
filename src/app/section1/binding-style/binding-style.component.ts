import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-style',
  templateUrl: './binding-style.component.html',
  styleUrls: ['./binding-style.component.css'],
})
export class BindingStyleComponent {
  public isError: boolean = false;
  public textStyle = {
    color: 'darkorange',
    fontSize: '26px',
  };
  public transform = 'text-transform'
}
