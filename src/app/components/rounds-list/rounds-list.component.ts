import { Component, Input } from '@angular/core';
import { Round } from 'src/app/models/app-models';

@Component({
  selector: 'app-rounds-list',
  templateUrl: './rounds-list.component.html',
  styleUrls: ['./rounds-list.component.css']
})
export class RoundsListComponent {
  @Input() rounds: Round[] = [];
}
