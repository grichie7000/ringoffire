import { Component, Input, OnChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-game-info',
  imports: [MatCardModule],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss',
})
export class GameInfoComponent implements OnChanges {
  cardAction = [
    {
      title: 'ASS',
      description:
        'Wasserfall: Alle fangen gleichzeitig an zu trinken. Niemand darf aufhören, bevor die Person links von ihm aufhört.',
    },
    {
      title: '2',
      description: 'Du: Wähle jemanden, der trinken muss.',
    },
    {
      title: '3',
      description: 'Ich: Du musst trinken.',
    },
    {
      title: '4',
      description: 'Frauen: Alle Frauen trinken.',
    },
    {
      title: '5',
      description:
        'Regel: Du darfst eine neue Regel aufstellen, die ab sofort für alle gilt.',
    },
    {
      title: '6',
      description: 'Männer: Alle Männer trinken.',
    },
    {
      title: '7',
      description: 'Himmel: Alle müssen die Hand heben. Der Letzte trinkt.',
    },
    {
      title: '8',
      description:
        'Partner: Wähle einen Trinkpartner. Jedes Mal, wenn du trinkst, muss er/sie auch trinken – und umgekehrt.',
    },
    {
      title: '9',
      description:
        'Reim: Du sagst ein Wort, die nächste Person muss ein Wort finden, das sich reimt, und so weiter. Wer versagt, trinkt.',
    },
    {
      title: '10',
      description:
        'Kategorie: Du nennst eine Kategorie (z. B. Automarken), die anderen nennen reihum etwas aus der Kategorie. Wer zögert oder nichts weiß, trinkt.',
    },
    {
      title: 'Bube',
      description:
        'Frage: Du stellst jemandem eine Frage, dieser muss sofort eine Frage zurückstellen. Wer zuerst lacht oder keine Frage stellt, trinkt.',
    },
    {
      title: 'Dame',
      description:
        'Königin der Finger: Wer die Karte zieht, darf irgendwann unauffällig einen Finger auf den Tisch legen. Die anderen müssen folgen. Der Letzte trinkt.',
    },
    {
      title: 'König',
      description:
        'Kings Cup: Gieße einen Teil deines Getränks in das Glas in der Mitte. Wer den letzten König zieht, trinkt alles im Glas.',
    },
  ];

  title: string = '';
  description: string = '';
  @Input() card: string = '';

  ngOnChanges(): void {
    if (this.card) {
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
      console.log(cardNumber);
    }
  }
}
