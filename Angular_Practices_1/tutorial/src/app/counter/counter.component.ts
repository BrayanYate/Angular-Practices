import { Component , signal, computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  // 1. Declaramos una signal para el estado
  count = signal(0);

  // 2. Una computed signal que depende de count
  doubleCount = computed(() => this.count() * 2);

  // 3. Métodos para actualizar la signal
  increment() {
    // .update recibe una función que devuelve el nuevo valor
    this.count.update(v => v + 1);
  }

  decrement() {
    this.count.update(v => v - 1);
  }
  
}
