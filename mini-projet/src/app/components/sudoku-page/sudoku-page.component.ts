import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SudokuService } from '../../services/sudoku/sudoku.service';
import { firstValueFrom } from 'rxjs';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-sudoku-page',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './sudoku-page.component.html',
  styleUrl: './sudoku-page.component.scss',
})
export class SudokuPageComponent {
  grid: number[][] = [];
  selected: number[] = [];
  selectIsProtected: boolean = true;
  baseGrid: number[][] = [];

  constructor(private sudokuService: SudokuService) {}

  ngOnInit(): void {
    firstValueFrom(this.sudokuService.getSudokuData())
      .then((data) => {
        this.grid = data.easy;
        for (let i = 0; i < this.grid.length; i++) {
          let row = [];
          for (let j = 0; j < this.grid[i].length; j++) {
            row.push(this.grid[i][j]);
          }
          this.baseGrid.push(row);
        }
        console.log(this.grid);
      })
      .catch((err) => {
        console.log("Erreur lors de l'appel api : ", err);
      });
  }

  clickCell(i: number, j: number) {
    this.selected[0] = i;
    this.selected[1] = j;
    this.selectIsProtected = this.isProtected(i, j);
  }

  isProtected(i: number, j: number): boolean {
    if (this.baseGrid[i][j] !== 0) {
      return true;
    }
    return false;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    let key = event.key;
    if (
      this.selected[0] !== -1 &&
      this.selected[1] !== -1 &&
      /^[1-9]$/.test(key) &&
      !this.selectIsProtected
    ) {
      let row = this.selected[0];
      let col = this.selected[1];
      this.grid[row][col] = parseInt(key, 10);
    }
  }
}
