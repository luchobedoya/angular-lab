import { Component, inject } from '@angular/core';
import { UsersService } from '../../../infraestructure/driver-adapters/users-signals/users.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'app-users',
  imports: [CommonModule, RouterModule, TitleComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export default class UsersComponent {
  public usersService = inject( UsersService )
}
