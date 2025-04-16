import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./ui/home/home.component'),
        children: [
            {
                path: 'change-detection',
                title: 'Change Detection',
                loadComponent: () =>
                  import(
                    './ui/pages/change-detection/change-detection.component'
                  ),
              },
              {
                path: 'control-flow',
                title: 'Control Flow',
                loadComponent: () =>
                  import('./ui/pages/control-flow/control-flow.component'),
              },
              {
                path: 'defer-options',
                title: 'Defer Options',
                loadComponent: () =>
                  import('./ui/pages/defer-options/defer-options.component'),
              },
              {
                path: 'defer-views',
                title: 'Defer Views',
                loadComponent: () =>
                  import('./ui/pages/defer-views/defer-views.component'),
              },
              {
                path: 'user/:id',
                title: 'User View',
                loadComponent: () => import('./ui/pages/user/user.component'),
              },
              {
                path: 'user-list',
                title: 'User List',
                loadComponent: () => import('./ui/pages/users/users.component'),
              },
              {
                path: 'view-transition-1',
                title: 'View Transition 1',
                loadComponent: () =>
                  import(
                    './ui/pages/view-transition-one/view-transition-one.component'
                  ),
              },
              {
                path: 'view-transition-2',
                title: 'View Transition 2',
                loadComponent: () =>
                  import(
                    './ui/pages/view-transition-two/view-transition-two.component'
                  ),
              },
              {
                path: 'tailwind-elements',
                title: 'Tailwind Elements',
                loadComponent: () =>
                  import(
                    './ui/pages/tailwild-elements/tailwild-elements.component'
                  ),
              },
              {
                path: 'tailwind-responsive',
                title: 'Tailwind Responsive',
                loadComponent: () =>
                  import(
                    './ui/pages/tailwild-responsive/tailwild-responsive.component'
                  ),
              },
              {
                path: '',
                redirectTo: 'control-flow',
                pathMatch: 'full',
              },
        ]
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    }
];
