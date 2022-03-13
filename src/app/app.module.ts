import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { TiktaktoeService } from './services/tiktaktoe.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { BoardAIComponent } from './board-ai/board-ai.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BoardAIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [TiktaktoeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
