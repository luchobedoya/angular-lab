import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  imports: [],
  templateUrl: './heavy-loaders-slow.component.html',
  styles: ``,
  standalone: true
})
export class HeavyLoadersSlowComponent {

  @Input({ required: true }) cssClass!: string;

  constructor(){
    console.log('HeavyLoadersSlowComponent');

    const start = Date.now();
    while( Date.now() - start < 4000 ) {}

    console.log('Cargado');
  }

}
