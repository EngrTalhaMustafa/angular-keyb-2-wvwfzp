import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'motive-button',
  templateUrl: './motive-button.component.html',
  styleUrls: ['./motive-button.component.css'],
  host: {
    'tabindex': '-1',
  },
})
export class MotiveButtonComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
