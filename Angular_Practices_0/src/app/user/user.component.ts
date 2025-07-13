import { Component } from '@angular/core';
import { GameComponent } from "../game/game.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GameComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
    name = 'brayan' ;
    isLogged = false ;
    favgame = '';

getFavorite(gameName:string){
  this.favgame = gameName;
}

    greet(){
      alert('Hola!!')
    }
    isDisabled = true;
}

