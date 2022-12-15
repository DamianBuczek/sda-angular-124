import { Component } from '@angular/core';
import { Result, Round } from './models/app-models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public seconds = 0;
  public decySeconds = 0;
  public isActive = false;
  public rounds: Round[] = [];
  public results: Result[] = [];
  public userName = '';

  private intervalId: NodeJS.Timer | undefined;

  public startStoper(): void {
    this.isActive = true;
    this.intervalId = setInterval(() => {
      this.decySeconds++;
      if (this.decySeconds === 10) {
        this.seconds++;
        this.decySeconds = 0;
      }
    }, 100);
  }

  public stopStoper(): void {
    if (this.intervalId) {
      this.isActive = false;
      clearInterval(this.intervalId);
    }
  }

  public resetStoper(): void {
    this.decySeconds = 0;
    this.seconds = 0;
    this.rounds = [];
  }

  public addRound(): void {
    this.rounds.push({
      seconds: this.seconds,
      decySeconds: this.decySeconds,
    });
  }

  public saveResult(): void {
    if (this.userName) {
      this.results.push({
        userName: this.userName,
        seconds: this.seconds,
        decySeconds: this.decySeconds,
      });
    }
    this.userName = '';
  }
}
