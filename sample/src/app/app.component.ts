import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sample';
  name="Daniel";
  data=[1,2,3,4,5,6]
  handlerClick(ev:Event){
    ev.stopPropagation();
    this.data.push(this.data.length+1)
  }
}
