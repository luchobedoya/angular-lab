import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from '../sideMenu/sideMenu.component';

@Component({
  selector: 'app-home',
  imports: [RouterModule, SideMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true
})
export default class HomeComponent {

}
