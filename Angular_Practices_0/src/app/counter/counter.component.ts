import { Component , signal , computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
//declarar un signal de estado
 count = signal(0);
 
// un computed dignal que depende de count
 doubleCount = computed(() => this.count() * 2);

// metodo para actualizar el signal
increment() {
// actualixal y devolver el valor del signal
this.count.update(value => value + 1);
}
decrement() {
  // actualixal y devolver el valor del signal
  this.count.update(value => value - 1);
}


}
