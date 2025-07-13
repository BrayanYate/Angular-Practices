import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { CounterComponent } from './counter/counter.component';
import { PipesPipe } from './pipes/pipes.pipe';
import { FormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent , CounterComponent , PipesPipe, FormsModule , DynamicFormComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  city = 'Bogota';
  text = 'Hola Mundo';
}
