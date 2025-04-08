import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  template: `
  <ul>
    @for (game of games; track game.id) {
      <li> {{game.name}}</li>
    }
  </ul>
  `,
  styles: ``
})
export class GameComponent {
    games=[
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
