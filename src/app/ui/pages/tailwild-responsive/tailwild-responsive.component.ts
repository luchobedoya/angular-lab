import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'app-tailwild-responsive',
  imports: [CommonModule, TitleComponent],
  templateUrl: './tailwild-responsive.component.html',
  styleUrl: './tailwild-responsive.component.scss'
})
export default class TailwildResponsiveComponent {

}
