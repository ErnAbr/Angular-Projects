import { Routes } from '@angular/router';
import { routeLinks } from './routes';
import { Orders } from '../features/orders/orders';
import { OrderHistory } from '../features/order-history/order-history';
import { authGuard } from '../core/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    children: [
      { path: routeLinks.orders, component: Orders },
      { path: routeLinks['order-history'], component: OrderHistory },
      { path: '**', redirectTo: routeLinks.orders },
    ],
  },
  { path: '**', redirectTo: '' },
];
