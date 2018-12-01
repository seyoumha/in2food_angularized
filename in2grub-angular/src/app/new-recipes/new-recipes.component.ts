import { Component, OnInit } from '@angular/core';
import { Recipe } from '../_models/recipe'
import { RecipeService} from '../_services/recipe.service'
import { Observable } from 'rxjs'  
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-new-recipes',
  templateUrl: './new-recipes.component.html',
  styleUrls: ['./new-recipes.component.css']
})
export class NewRecipesComponent implements OnInit {
  recipe:Recipe = new Recipe()
  errors = []

  constructor(private data: RecipeService, private route: ActivatedRoute,
        private router: Router) { }
  onSubmit(){

    this.data.postRecipe(this.recipe)
      .subscribe(
        recipe=>{
          this.router.navigate(['detail', recipe['id']])

    },
    error=> this.errors = error.json

    )

  }



  ngOnInit() {
  }

}
