import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'app-typescript-utils',
  imports: [CommonModule, TitleComponent],
  templateUrl: './typescript-utils.component.html',
  styleUrl: './typescript-utils.component.scss'
})
export default class TypescriptUtilsComponent {
  user: [string, number] = ['primero', 2];

  // funcion tipo never
  funcionExtraña = () => {
    while (true) {
      console.log('nunca para');
    }
  }

}
