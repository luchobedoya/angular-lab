import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'app-view-transition-two',
  imports: [CommonModule, TitleComponent],
  templateUrl: './view-transition-two.component.html',
  styleUrl: './view-transition-two.component.scss'
})
export default class ViewTransitionTwoComponent {

}
