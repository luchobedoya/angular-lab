import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '../../title/title.component';

type Grade = 'A' | 'B' | 'C' | 'D';

@Component({
  selector: 'app-control-flow',
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss',
  standalone: true
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameWorks = signal(['Angular', 'React', 'Vue']);
  public frameWorks2 = signal([]);

  public toggleContent() {
    this.showContent.update((prev) => !prev);
  }
}
