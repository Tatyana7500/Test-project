import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent {
  @Input() search: string = '';
  @Input() placeHolder: string = '';
  @Output() callback = new EventEmitter();

  constructor() { }

  public onInput(event: Event): void {
    const value = (<HTMLInputElement> event.target).value;

    this.callback.emit(value);
  }
}
