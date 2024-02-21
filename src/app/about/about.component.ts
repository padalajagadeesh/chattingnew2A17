import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  emptySlotArray = ['', '', '', '', '', '', '', '']
  data: any = [[], [], [], [], [], [], [], []];
  whiteKingIconPlacement = [];
  whiteKingArray = ['&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;']
  whitepawan = ['&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;']
  blackKingArray = ['&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;']
  blackpawan = ['&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;']
  selectedItem: any = '';
  seletedRowIndex: any = '';
  seletedColumnIndex: any = '';
  targetIndex: any[][] = [];
  ngOnInit() {
    console.log('rrrr');
    this.data = this.data.map((item: any) => {
      item = JSON.parse(JSON.stringify(this.emptySlotArray))
      return item;
    })
    this.data[7] = this.whiteKingArray;
    this.data[6] = this.whitepawan;
    this.data[0] = this.blackKingArray;
    this.data[1] = this.blackpawan
    this.data.forEach((v: any) => {
      console.log(v, '00000')
    })
  }

  iconClick(item: any, i: number, j: number) {
    console.log('34324', item, i, i + 1, j);
    if (item && item !== '.' && this.selectedItem === '') {
      this.selectedItem = JSON.parse(JSON.stringify(item))
      this.seletedRowIndex = JSON.parse(JSON.stringify(i))
      this.seletedColumnIndex = JSON.parse(JSON.stringify(j))
      this.setPossibleMoves(item, i, j);
      return;
    }
    else if (item === '.' && this.selectedItem) {
      this.data[this.seletedRowIndex][this.seletedColumnIndex] = '';
      this.data[i][j] = JSON.parse(JSON.stringify(this.selectedItem));
      console.log(i, j, this.data[i][j], this.data, "assign")

    }
    this.emptyDots(i, j);
    // this.itemHaveOrnot(item,i,j);
  }

  itemHaveOrnot(item: any, i: any, j: any) {
    this.targetIndex.forEach(index => {
      console.log(item, i, j, '0000000', this.data[index[i + 1]])
      // if(this.data[index[i+1]]){
      //   this.emptyDots(i,j);
      // }
    })
  }

  emptyDots(i: any, j: any) {
    this.targetIndex.forEach(index => {
      console.log(this.data[index[j]], '1234')
      this.data[index[0]][index[1]] = this.data[index[0]][index[1]] === '.' ? '' : this.data[index[0]][index[1]];
      // if(this.data[index[i+1]]){
      // }
    })
    this.selectedItem = '';
    this.seletedRowIndex = '';
    this.seletedColumnIndex = '';

  }

  setPossibleMoves(item: any, i: number, j: number) {
    console.log(item, i, j, '0909****')

    switch (item) {
      case '&#9823;':
        if (i === 1) {
          this.data[i + 1][j] = JSON.parse(JSON.stringify('.'));
          this.data[i + 2][j] = JSON.parse(JSON.stringify('.'));
          this.targetIndex = [[i + 1, j], [i + 2, j]];
        }
        else {
          this.data[i + 1][j] = JSON.parse(JSON.stringify('.'));
          this.targetIndex = [[i + 1, j]];
        }
        break;
      case '&#9820;':
        console.log('123*&&', i)
        if (this.data[i + 1][j] !== '&#9823;') {
          this.data[i + 1][j] = JSON.parse(JSON.stringify('.'));
          this.data[i + 2][j] = JSON.parse(JSON.stringify('.'));
          this.data[i + 3][j] = JSON.parse(JSON.stringify('.'));
          this.data[i + 4][j] = JSON.parse(JSON.stringify('.'));
          this.data[i + 5][j] = JSON.parse(JSON.stringify('.'));
          this.targetIndex = [[i + 1, j], [i + 2, j], [i + 3, j], [i + 4, j], [i + 5, j]];
        }
        break;
      case '&#9821;':
        // Bishops move diagonally
        console.log('dssdsd')
        if (Math.abs(i - j) === Math.abs(j - i)) {
          // Check if there are any pieces in the path
          const rowIncrement = j > i ? 1 : -1;
          const colIncrement = j > i ? 1 : -1;
          let currentRow = i + rowIncrement;
          let currentCol = j + colIncrement;
          if(currentRow){
            while (currentRow !== i && currentCol !== j) {
              if (this.data[currentRow][currentCol] !== ' ') {
                // There's a piece in the path
              }
              currentRow += rowIncrement;
              currentCol += colIncrement;
            }
          }
        }
        break; // Invalid move
    }
    /* if(item === '&#9822;') {
      // this.data[this.seletedRowIndex][this.seletedColumnIndex] = '';
      this.data[i+2][j+1] = JSON.parse(JSON.stringify('here'));
      this.data[i+2][j-1] = JSON.parse(JSON.stringify('here'));
    } else if(item === '&#9823;') {
      this.data[i+1][j] = JSON.parse(JSON.stringify('here'));
      this.data[i+2][j] = JSON.parse(JSON.stringify('here'));
    } else if(item === '&#9820;'){
      console.log(this.data[i+1][j],'0909')
      if(this.data[i+1][j] !== '&#9823;'){
        this.data[i+1][j] = JSON.parse(JSON.stringify('here'));
        this.data[i+2][j] = JSON.parse(JSON.stringify('here'));
        this.data[i+3][j] = JSON.parse(JSON.stringify('here'));
        this.data[i+4][j] = JSON.parse(JSON.stringify('here'));
        this.data[i+5][j] = JSON.parse(JSON.stringify('here'));
      }
    } */
  }
}