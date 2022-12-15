import { Injectable } from '@angular/core';
import { Round } from '../models/app-models';

@Injectable({
  providedIn: 'root',
})
export class RoundService {
  private rounds: Round[] = [];

  constructor() {}

  getRounds(): Round[] {
    return this.rounds;
  }

  addRound(round: Round) {
    this.rounds.push(round);
  }

  clearRounds(): void {
    this.rounds.length = 0;
  }
}
