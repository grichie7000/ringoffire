import { Component } from '@angular/core';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard: string = '';
  game!: Game;

  constructor() {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop() || '';
      this.pickCardAnimation = true;

      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 950);
    }
  }
}
