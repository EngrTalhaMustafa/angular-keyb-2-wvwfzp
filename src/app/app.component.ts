import { Component, ViewChildren, QueryList } from '@angular/core';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { ENTER } from '@angular/cdk/keycodes';
import { ListItemComponent } from './list-item/list-item.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChildren(ListItemComponent) items: QueryList<ListItemComponent>;
  users = [
    {
      id: '5b902934d965e7501f4e1c6f',
      name: 'Caroline Hodges',
    },
    {
      id: '5b9029348f7eed8b6f5f02db',
      name: 'Delores Rivas',
    },
    {
      id: '5b9029346f48c8407c64d0d5',
      name: 'Darlene Franklin',
    },
    {
      id: '5b9029341eff315fa87f9e21',
      name: 'Alfreda Love',
    },
    {
      id: '5b9029342e8917c6ccdb9865',
      name: 'Marcy Ratliff',
    },
    {
      id: '5b9029349dbb48013460e01f',
      name: 'Beulah Nielsen',
    },
    {
      id: '5b902934f4f1586e5e72d74a',
      name: 'Morton Kerr',
    },
    {
      id: '5b9029347918bb204bf7014e',
      name: 'Autumn Tillman',
    },
    {
      id: '5b902934b86f80e1fc60c626',
      name: 'Diane Bennett',
    },
    {
      id: '5b9029348999f59215020349',
      name: 'June Eaton',
    },
  ];
}
