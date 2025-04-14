import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { Route, RouterModule } from '@angular/router';

@Component({
  selector: 'side-menu',
  imports: [RouterModule],
  template: `<p>sideMenu works!</p>`,
  styleUrl: './sideMenu.component.css',
  templateUrl: './sideMenu.component.html',
})
export class SideMenuComponent { 
  public menuItems: Route[] = [];

  constructor() {
    this.menuItems = this.setMenu().flat();
    console.log(this.menuItems);
  }

  setMenu(): Route[] {
    return routes.map((route) => 
      route.children ?? []
    ).flat().filter(route => route && route.path).filter(route => !route.path?.includes(':'));
  }
  
}
