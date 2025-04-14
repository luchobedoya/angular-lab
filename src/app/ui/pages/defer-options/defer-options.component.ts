import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoadersFastComponent } from '@core/shared-global/heavy-loaders-fast/heavy-loaders-fast.component';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'app-defer-options',
  imports: [CommonModule, HeavyLoadersFastComponent, TitleComponent],
  templateUrl: './defer-options.component.html',
  styleUrl: './defer-options.component.scss'
})
export default class DeferOptionsComponent {

}
