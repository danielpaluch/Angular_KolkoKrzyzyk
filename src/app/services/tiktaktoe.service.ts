import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiktaktoeService {




  private boardGame = new BehaviorSubject<Array<string>>([]);
  private Incerement = new Subject<boolean>()
  private player = true;
  win = false;

  constructor() {
    const board: Array<string> = ["", "", "", "", "", "", "", "", ""];
    this.boardGame.next(board);
  }


  addX(index: number) {
    const newBoard = this.boardGame.getValue();
    newBoard[index] = "X";
    this.boardGame.next(newBoard);
    this.doIncrement();
  }

  addO(index: number) {
    const newBoard = this.boardGame.getValue();
    newBoard[index] = "O";
    this.boardGame.next(newBoard);
    this.doIncrement();
  }
  doIncrement() {
    if (this.player) {
      this.player = false
    }
    else {
      this.player = true;
    }
    this.player;
    this.Incerement.next(this.player);
  }
  winner(board: Array<string>): boolean {

    if ((board[0] === board[1]) && (board[1] === board[2]) && board[0] != "")
      this.win = true;
    if ((board[3] === board[4]) && (board[4] === board[5]) && board[3] != "")
      this.win = true;
    if ((board[6] === board[7]) && (board[7] === board[8]) && board[6] != "")
      this.win = true;
    if ((board[0] === board[4]) && (board[4] === board[8]) && board[0] != "")
      this.win = true;
    if ((board[2] === board[4]) && (board[4] === board[6]) && board[2] != "")
      this.win = true;
    if ((board[0] === board[3]) && (board[3] === board[6]) && board[0] != "")
      this.win = true;
    if ((board[1] === board[4]) && (board[4] === board[7]) && board[1] != "")
      this.win = true;
    if ((board[2] === board[5]) && (board[5] === board[8]) && board[2] != "")
      this.win = true;
    console.log("SPRAWDZAM " + this.win);
    return this.win
  }
  getBoard(): Observable<Array<string>> {
    return this.boardGame.asObservable();
  }
  getIncrement(): Observable<boolean> {
    return this.Incerement.asObservable();
  }

}
