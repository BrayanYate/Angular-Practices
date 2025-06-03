import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule ],
  template: `
  <h3> los juegos favoritos de {{ name }}</h3>
  <ul>
    @for (game of games; track game.id) {
      <li> {{game.name}}</li>
    }
  </ul>
  `,
  styles: ``
})
export class GameComponent {
  @Input() name = '';   
  games= [
      {
        id: 1,
        name: 'Valorant'
      },
      {
        id:2,
        name: 'Lol'
      },
      {
        id:3,
        name: 'hearstone'
      }
    ]
}
