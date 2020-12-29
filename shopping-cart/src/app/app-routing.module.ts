import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' }, //pathMatch - gets confused and will not know which route to use.
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shop', component: ShoppingCartComponent },
  { path: 'wish', component: WishListComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent }, // ** match every route - if nothing else aboe not matches this route will be hit.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
