import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
  standalone: true
})
export class TitleComponent {
  @Input( {required: true} ) title!: string;
  @Input( { transform: booleanAttribute } ) withShadow: boolean = false;
}
