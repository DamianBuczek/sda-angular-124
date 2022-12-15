import { Component, Input } from '@angular/core';
import { Result } from 'src/app/models/app-models';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css'],
})
export class ResultsListComponent {
  @Input() results: Result[] = [];
}
