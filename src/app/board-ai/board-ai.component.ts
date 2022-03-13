import { Component, OnInit } from '@angular/core';
import { TiktaktoeService } from '../services/tiktaktoe.service';

@Component({
  selector: 'app-board-ai',
  templateUrl: './board-ai.component.html',
  styleUrls: ['./board-ai.component.css']
})
export class BoardAIComponent implements OnInit {

  board: Array<string> = [];
  player = true;
  winner = false;

  constructor(private tto: TiktaktoeService) {
    this.tto.getBoard().subscribe((newBoard: Array<string>) => {
      this.board = newBoard;
    });
    this.tto.getIncrement().subscribe((increment: boolean) => {
      this.player = increment;
    });
  }


  click($event: any, index: number) {
    if (!this.tto.winner(this.board)) {
      if (this.board[index] == "") {
        this.tto.addO(index);
        if (!this.tto.winner(this.board)) {
          this.tto.AI();
        }
      }
    }
    this.winner = this.tto.winner(this.board)
  }

  getWinner() {
    return this.player ? "X" : "O";
  }

  ngOnInit(): void {
  }

}
