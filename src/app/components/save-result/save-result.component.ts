import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-save-result',
  templateUrl: './save-result.component.html',
  styleUrls: ['./save-result.component.css'],
})
export class SaveResultComponent {
  public userName = '';
  @Output() onSaveResult = new EventEmitter<string>();

  public onSaveClick(): void {
    this.onSaveResult.emit(this.userName);
    this.userName = '';
  }
}
