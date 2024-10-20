import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SudokuService {
  private apiUrl = 'https://664ba07f35bbda10987d9f99.mockapi.io/api/sudoku/1';
  private apiUrlComplete =
    'https://664ba07f35bbda10987d9f99.mockapi.io/api/game';

  constructor(private http: HttpClient) {}

  getSudokuData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  completeSudoku(date: number, playerName: string, clues: number) {
    let data: any = {
      date: date,
      playerName: playerName,
      clues: clues,
    };
    console.log(data);
    return this.http.post(this.apiUrlComplete, data);
  }
}
