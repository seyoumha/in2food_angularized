import { Component, OnInit } from '@angular/core';
import { RecipeService} from '../_services/recipe.service'
import { Observable } from 'rxjs'  
import {ActivatedRoute} from "@angular/router";
import { Recipe } from '../_models/recipe'



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id:any
  recipe: Recipe

  constructor(private data: RecipeService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe( params => this.id = params.id );

    this.data.getRecipeInfo(this.id).subscribe(
      (r: Recipe) => {
        this.recipe = r})
  }

}
