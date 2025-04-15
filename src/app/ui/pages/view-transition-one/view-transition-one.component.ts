import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'app-view-transition-one',
  imports: [CommonModule, TitleComponent],
  templateUrl: './view-transition-one.component.html',
  styleUrl: './view-transition-one.component.scss'
})
export default class ViewTransitionOneComponent {

}
