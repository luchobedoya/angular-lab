import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@core/shared-global/heavy-loaders-slow/heavy-loaders-slow.component';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'app-defer-views',
  imports: [CommonModule, HeavyLoadersSlowComponent, TitleComponent],
  templateUrl: './defer-views.component.html',
  styles: ``,
  standalone: true
})
export default class DeferViewsComponent {
  constructor() {}

   
}
