import { Component, OnInit } from '@angular/core';
import { RecipeService} from '../_services/recipe.service'
import { Observable } from 'rxjs'  
import {ActivatedRoute} from "@angular/router";
import { Recipe } from '../_models/recipe'
import { Ingredient } from '../_models/ingredient'



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id:any
  recipe: Recipe
  ingredients: Ingredient[]

  constructor(private data: RecipeService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe( params => this.id = params.id );

    this.data.getRecipeInfo(this.id).subscribe(
      (data) => {
        this.recipe = data['recipe']})
    
    this.data.getIngredients(this.id).subscribe(
      (data)=>{
        this.ingredients = data['ingredients']
        console.log(this.ingredients)
      })

  }

}
