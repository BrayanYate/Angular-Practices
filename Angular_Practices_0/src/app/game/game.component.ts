import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule ],
  template: `
  <h3> los juegos favoritos de {{ name }}</h3>
  <ul>
    @for (game of games; track game.id) {
      <li (click) = "fav(game.name)" > {{game.name}}</li>
    }
  </ul>
  `,
  styles: ``
})
export class GameComponent {
  @Input() name = '';   
  @Output() addfavGameEvent = new EventEmitter<string>();
  
  fav(gameName: string) {
    //console.log(`El juego favorito de ${this.name} es ${gameName}`);
    this.addfavGameEvent.emit(gameName);
  }

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
