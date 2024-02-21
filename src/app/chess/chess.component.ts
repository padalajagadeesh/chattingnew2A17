import { Component, OnInit } from '@angular/core';
import { ChessBordComponent } from '../chessbord/chessbord.component';

@Component({
    selector: 'app-chess',
    standalone: true,
    imports:[ChessBordComponent],
    templateUrl: './chess.component.html',
    styleUrl: './chess.component.scss'
})
export class ChessComponent {
  ngOnInit(): void {

  }

}
