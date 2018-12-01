import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'  
import { Recipe } from '../_models/recipe'
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  getFeatured(){
    return this.http.get<Recipe>('http://localhost:3000/recipes/featured.json')
  }
  postRecipe(recipe){
    return this.http.post('http://localhost:3000/recipes.json', recipe)
  }
  getRecipeInfo(id){
    return this.http.get(`http://localhost:3000/recipes/${id}`)
  }
  search(recipe){
    return this.http.get(`http://localhost:3000/recipes/search?search=${recipe}`)
  }
}
