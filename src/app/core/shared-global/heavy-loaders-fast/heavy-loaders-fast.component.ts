import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  imports: [CommonModule],
  templateUrl: './heavy-loaders-fast.component.html',
  styles: ``,
  standalone: true
})
export class HeavyLoadersFastComponent {
  @Input({ required: true }) cssClass!: string;
}
