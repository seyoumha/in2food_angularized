import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Angular2TokenService } from 'angular2-token';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlertComponent } from './_directives/alert.component';
import { AuthGuard } from './_guards/auth.guard';
import { JwtInterceptor } from './_helpers/jwt.interceptors';
import { ErrorInterceptor } from './_helpers/error.interceptor';

import { AlertService } from './_services/alert.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


import { FeaturedRecipesComponent } from './featured-recipes/featured-recipes.component';
import { DetailsComponent } from './details/details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FavoriteRecipesComponent } from './favorite-recipes/favorite-recipes.component';
import { NewRecipesComponent } from './new-recipes/new-recipes.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SearchComponent } from './search/search.component';
import { AuthService} from './_services/auth.service'


@NgModule({
  declarations: [
    AppComponent,
    FeaturedRecipesComponent,
    DetailsComponent,
    NavbarComponent,
    FavoriteRecipesComponent,
    NewRecipesComponent,
    MyRecipesComponent,
    ShoppingListComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    Angular2TokenService,
    AuthGuard,
    AlertService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}

  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
