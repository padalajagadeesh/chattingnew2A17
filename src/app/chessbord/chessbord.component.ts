import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-chessbord',
    standalone: true,
    imports:[],
    templateUrl: './chessbord.component.html',
    styleUrl: './chessbord.component.scss'
})
export class ChessBordComponent {
  board: string[][] | any;
  ngOnInit(): void {
    this.initializeBoard();
  }

  initializeBoard(): void {
    // Initialize the board with empty squares
    this.board = [
      ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
      ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
      ['_', '_', '_', '_', '_', '_', '_', '_'],
      ['_', '_', '_', '_', '_', '_', '_', '_'],
      ['_', '_', '_', '_', '_', '_', '_', '_'],
      ['_', '_', '_', '_', '_', '_', '_', '_'],
      ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
      ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
    ];
  }

  
  movePiece(start: number[], end: number[]): void {
    const [startRow, startCol] = start;
    const [endRow, endCol] = end;
    const piece = this.board[startRow][startCol];

    // Check if the move is valid
    if (this.isValidMove(startRow, startCol, endRow, endCol)) {
      // Move the piece
      this.board[endRow][endCol] = piece;
      this.board[startRow][startCol] = '_';
    } else {
      console.log('Invalid Move');
    }
  }

  isValidMove(startRow: number, startCol: number, endRow: number, endCol: number): boolean {
    // Basic move validation
    // Add more complex logic for specific pieces and game rules
    return true;
  }
}
