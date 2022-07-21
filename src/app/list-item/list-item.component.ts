import { Component, Input, ElementRef } from '@angular/core';
import { FocusKeyManager } from '@angular/cdk/a11y';

@Component({
  selector: 'app-list-item',
  template: `
  <div [class.disabled]="disabled">
    <ng-content></ng-content>
  </div>  
  `,
  host: {
    'tabindex': '-1'
  },
  styles: [
    `:host:focus {
        background: lightblue;
        color: #fff;
     }`
  ]
})
export class ListItemComponent {
  @Input() item;
  
  constructor(private host: ElementRef) { }

  focus() {
    this.host.nativeElement.focus();
  }
}