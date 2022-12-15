import { Component } from '@angular/core';
import { Round, Result } from 'src/app/models/app-models';
import { RoundService } from 'src/app/services/round.service';

@Component({
  selector: 'app-stoper',
  templateUrl: './stoper.component.html',
  styleUrls: ['./stoper.component.css'],
})
export class StoperComponent {
  public seconds = 0;
  public decySeconds = 0;
  public isActive = false;
  public rounds: Round[] = [];
  public results: Result[] = [];

  private intervalId: NodeJS.Timer | undefined;

  constructor(private roundService: RoundService) {
    this.rounds = this.roundService.getRounds();
  }

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
    this.roundService.clearRounds();
  }

  public addRound(): void {
    this.roundService.addRound({
      seconds: this.seconds,
      decySeconds: this.decySeconds,
    });
  }

  public saveResult(userName: string): void {
    if (userName) {
      this.results.push({
        userName: userName,
        seconds: this.seconds,
        decySeconds: this.decySeconds,
      });
    }
  }
}
