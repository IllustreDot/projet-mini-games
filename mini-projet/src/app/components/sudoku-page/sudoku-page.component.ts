import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SudokuService } from '../../services/sudoku/sudoku.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-sudoku-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sudoku-page.component.html',
  styleUrl: './sudoku-page.component.scss'
})
export class SudokuPageComponent {

    grid : number[][] = [];
    selected : number[] = []

    constructor(private sudokuService : SudokuService) {};

    ngOnInit() : void {

      firstValueFrom(this.sudokuService.getSudokuData())
        .then((data) => {
          this.grid = data.easy;
          console.log(this.grid);
        })
        .catch((err) => {
          console.log("Erreur lors de l'appel api : ", err);
        })

    }

    clickCell(i : number, j : number) {
      this.selected[0] = i;
      this.selected[1] = j;
      console.log(this.selected);
    }
}
