import { Injectable } from '@angular/core';
import { Result } from '../models/app-models';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  private readonly results: Result[] = [];

  constructor() {}

  getResults(): Result[] {
    return this.results;
  }

  addResult(result: Result): void {
    this.results.push(result);
  }
}
