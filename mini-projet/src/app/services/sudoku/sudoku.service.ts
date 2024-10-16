import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SudokuService {
  private apiUrl = 'https://664ba07f35bbda10987d9f99.mockapi.io/api/sudoku/1';

  constructor(private http: HttpClient) {}

  getSudokuData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
