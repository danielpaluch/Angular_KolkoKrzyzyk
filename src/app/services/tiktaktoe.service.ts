import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiktaktoeService {

  private boardGame = new BehaviorSubject<Array<string>>([]);
  private Incerement = new Subject<boolean>();
  private player = true;
  private winn = new Subject<boolean>();
  win = false;

  constructor() {
    const board: Array<string> = ["", "", "", "", "", "", "", "", ""];
    this.boardGame.next(board);
  }


  AI(){
    const newBoard = this.boardGame.getValue();
    let index = 0;
    let places = [];
    let howMuch=0;
    for(let i=0;i<newBoard.length;i++){
      if(newBoard[i]==""){
        places[howMuch]=i;
        howMuch++;
      }
    }
    index = places[Math.floor(Math.random() * places.length)];
    newBoard[index] = "X";
    this.boardGame.next(newBoard);
    this.doIncrement();
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
  restart(){
    let board: Array<string> = ["","","","","","","","",""];
    this.boardGame.next(board);
    this.win = false;
    this.winn.next(this.win);
    this.player = true;
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
    this.winn.next(this.win);
    return this.win
  }
  getBoard(): Observable<Array<string>> {
    return this.boardGame.asObservable();
  }
  getIncrement(): Observable<boolean> {
    return this.Incerement.asObservable();
  }
  getWinner(): Observable<boolean>{
    return this.winn.asObservable();
  }

}
