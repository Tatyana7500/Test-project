import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdownscroll',
  templateUrl: './dropdownscroll.component.html',
  styleUrls: ['./dropdownscroll.component.less']
})
export class DropdownscrollComponent {
  @Input() lists: string[] = [];
  @Input() title: string = '';
  @Input() selectedValue: string = '';
  @Output() callback = new EventEmitter();

  constructor() { }

  public changeValue(event: Event): void {
    this.callback.emit(event);
  }
}
