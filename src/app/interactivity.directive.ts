import {
  Directive,
  ElementRef,
  ViewChildren,
  ContentChildren,
  QueryList,
  Input,
  HostListener,
  OnChanges,
  SimpleChange,
} from '@angular/core';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { AfterContentInit, AfterViewInit } from '@angular/core/src/metadata';
import { SimpleChanges } from '@angular/core/src/change_detection/change_detection';
@Directive({
  selector: '[appInteractivity]',
  host: {},
})
export class InteractivityDirective implements AfterViewInit, OnChanges {
  @Input() items: QueryList<any>;
  private self: ElementRef;
  private keyManager: FocusKeyManager<any>;
  constructor(el: ElementRef) {
    // this.keyManager = new FocusKeyManager().withWrap();
  }

  ngAfterViewInit() {
    console.log('#41', this.items);
  }

  ngOnChanges(obj: SimpleChanges) {
    console.log(obj.items);
    if (
      obj.items.currentValue != undefined &&
      obj.items.currentValue != obj.items.previousValue
    ) {
      this.keyManager = new FocusKeyManager(this.items).withWrap();
    }
    console.log(obj.items, this.keyManager);
  }

  @HostListener('keydown', ['$event']) onKeyUp(keyboardEvent: KeyboardEvent) {
    console.log(keyboardEvent.code);
    if (keyboardEvent.code === 'Enter') alert(this.keyManager.activeItem.item.name);
    if (keyboardEvent.code === 'ArrowDown') alert(this.keyManager.activeItem.item.name);

    // this.keyManager.onKeydown(keyboardEvent);
  }
}
