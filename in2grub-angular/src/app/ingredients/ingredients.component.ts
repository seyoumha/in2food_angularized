import { Component, OnInit, Input } from '@angular/core';
import { RecipeService} from '../_services/recipe.service'
import { Observable } from 'rxjs'  
import { Recipe } from '../_models/recipe'
import { Ingredient } from '../_models/ingredient'

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  @Input() ingredients: Ingredient[]
  @Input() recipe_id:number 
  ingredient:Ingredient= new Ingredient

  constructor(private data: RecipeService) { }

  onSubmit(){
    this.data.addIngredient(this.ingredient, this.recipe_id).subscribe(
      (data :Ingredient) =>{
        console.log({data})
        this.ingredients.push(data)
      }
      )
  }

  ngOnInit() {
  }

}
