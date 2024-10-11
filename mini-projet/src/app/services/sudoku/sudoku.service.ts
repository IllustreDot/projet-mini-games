import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SudokuService {
  private apiUrl = '/sudoku';

  constructor(private http: HttpClient) {}

  getSudokuData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
