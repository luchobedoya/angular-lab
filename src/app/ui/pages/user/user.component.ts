import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../infraestructure/driver-adapters/users-signals/users.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, switchMap } from 'rxjs';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'app-user',
  imports: [CommonModule, TitleComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  //  constructor() {
  //   this.route.params.subscribe(params => {
  //     console.log({params});
  //   })
  // }

  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.getUserID(id))
      ,catchError((err) => {
        console.error(err);
        return [];
      }) 
    )
  );

  getUserID(id: string){
    return this.usersService.getUserById(id)
      .pipe(
        map((resp) => {
        return resp;
      })
    );
  }

  public titleLabel = computed(() => {
    if (this.user()) {
      console.log(this.user());
      return `Información del usuario: ${this.user()?.first_name} ${
        this.user()?.last_name
      } `;
    }
    return 'Información del usuario';
  });
}
