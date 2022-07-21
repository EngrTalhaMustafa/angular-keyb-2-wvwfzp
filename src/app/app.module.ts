import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { FilterPipe } from './filter.pipe';
import { MotiveButtonComponent } from './motive-button/motive-button.component';
import { InteractivityDirective } from './interactivity.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ListItemComponent,
    FilterPipe,
    MotiveButtonComponent,
    InteractivityDirective
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
