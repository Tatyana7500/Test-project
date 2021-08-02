import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.less']
})
export class CheckboxComponent {
  @Input() title: string = '';
  @Input() checked: boolean = true;
  @Output() callback = new EventEmitter();

  constructor() { }

  public onToggle(): void {
    this.callback.emit();
  }
}
