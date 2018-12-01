import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'  
import { RecipeService} from '../_services/recipe.service'
import { Recipe } from '../_models/recipe'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 searchedRecipes: Recipe

  constructor(private data: RecipeService) { }

  ngOnInit() {
  }

  recipeSearch(recipe){
    this.data.search(recipe).subscribe(
      data => this.searchedRecipes = data['recipes']
      )
  }

}
