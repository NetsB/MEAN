import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  public Name = "Netra";

  public Display() : string
  {
    var str : string = "Marvellous";
    return str;
  }

}
