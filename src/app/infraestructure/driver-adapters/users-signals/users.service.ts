import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import type { User, UserResponse, UsersResponse } from '@core/interfaces-globals/req-response';
import { delay, map } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private http = inject( HttpClient );

  #state = signal<State>({
    loading: true,
    users: [],
  });

  public users = computed( () => this.#state().users );
  public loading = computed( () => this.#state().loading );
  
  constructor(){
    console.log('Cargando Data ...');
    this.http.get<UsersResponse>('https://reqres.in/api/users')
    .pipe( delay(2000) )
    .subscribe( res => {
      this.#state.set({
        loading: false,
        users: res.data,
      })
    });
  }

  getUserById( id: string ) {
    console.log(id);
    return this.http.get<UserResponse>(`https://reqres.in/api/users/${ id }`)
      .pipe(
        delay(2000),
        map((resp) => {
          console.log(resp.data);
          return resp.data
        } )
      )

  }
}

