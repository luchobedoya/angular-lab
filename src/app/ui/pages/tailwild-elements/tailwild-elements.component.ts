import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'app-tailwild-elements',
  imports: [CommonModule, TitleComponent],
  templateUrl: './tailwild-elements.component.html',
  styleUrl: './tailwild-elements.component.scss'
})
export default class TailwildElementsComponent {

}
