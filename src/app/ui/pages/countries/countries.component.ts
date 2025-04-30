import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'app-countries',
  imports: [CommonModule, TitleComponent],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss'
})
export default class CountriesComponent implements OnInit {
  public titleNameSignal = signal({
    name: 'Country',
  });

  ngOnInit(): void {
    this.getTitle();
  }

  getTitle(): void {
    computed(
      () => `Change detection - ${ this.titleNameSignal().name }`
    );
  }



   

    
  
}
