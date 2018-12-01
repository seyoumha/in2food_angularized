import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RecipeService} from '../_services/recipe.service'
import { Observable } from 'rxjs'  
import { Recipe } from '../_models/recipe'



@Component({
  selector: 'app-featured-recipes',
  templateUrl: './featured-recipes.component.html',
  styleUrls: ['./featured-recipes.component.css']
})
export class FeaturedRecipesComponent implements OnInit {
  recipes: Recipe;
  title= 'Featured Recipeis'

  constructor(private data: RecipeService) { }

  ngOnInit() {
    this.data.getFeatured().subscribe(
      data => this.recipes = data['recipes']
      )
  }

}
