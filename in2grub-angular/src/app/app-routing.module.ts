import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturedRecipesComponent } from './featured-recipes/featured-recipes.component';
import { DetailsComponent } from './details/details.component';
import { FavoriteRecipesComponent } from './favorite-recipes/favorite-recipes.component';
import { NewRecipesComponent } from './new-recipes/new-recipes.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {Angular2TokenService} from 'angular2-token'


const routes: Routes = [
  {
    path: '',
    component: FeaturedRecipesComponent
  },
  {
    path: 'favorite',
    component: FavoriteRecipesComponent,
    canActivate: [Angular2TokenService]
  },
  {
    path: 'new',
    component: NewRecipesComponent
  },
  {
    path: 'mine',
    component: MyRecipesComponent
  },
  {
    path: 'shoppinglist',
    component: ShoppingListComponent
  },
  {
    path: 'detail/:id',
    component: DetailsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
