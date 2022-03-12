import { Component } from '@angular/core';
import { TiktaktoeService } from './services/tiktaktoe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  player=true;
  board: Array<string> = [];
  constructor(private tto: TiktaktoeService){
    this.tto.getBoard().subscribe((newBoard: Array<string>) => {
      this.board = newBoard;
    });
  }
  getPlayer(){
    return this.player ? "O" : "X";
  }

  

}
