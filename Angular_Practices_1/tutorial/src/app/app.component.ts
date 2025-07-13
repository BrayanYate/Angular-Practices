import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { ReversoPipe } from './pipes/reverso.pipe';
import { DynamicFromComponent } from './dynamic-from/dynamic-from.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CounterComponent , ReversoPipe , FormsModule, DynamicFromComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tutorial';
  text = 'Hola Mundo';
}
