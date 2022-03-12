import { Component } from '@angular/core';
import { TiktaktoeService } from './services/tiktaktoe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})  
export class AppComponent {

  player=true;
  winner=false;
  board: Array<string> = [];
  constructor(private tto: TiktaktoeService){
    this.tto.getIncrement().subscribe((i: boolean) => {
      this.player = i;
    });
    this.tto.getWinner().subscribe((getWin: boolean)=>{
      this.winner = getWin;
    });
    this.tto.getBoard().subscribe((newBoard: Array<string>) => {
      this.board = newBoard;
    });
  }
  restart(){
    this.tto.restart();
  }

  getPlayer(){
    return this.player ? "O" : "X";
  }
  getName(){
    return this.player ? "X" : "O";
  }


  

}
